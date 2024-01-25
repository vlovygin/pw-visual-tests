# Visual tests example for site https://bankrot.fedresurs.ru/

To update screenshots set environment at `.env` root file, execute `docker compose up --build` and commit changes.\
Commits only linux based screenshots, other paths need to set to `.gitignore` root file. \
Support `chromium`, `firefox` and `webkit` projects.

### Update screenshots for project (default resolution is 1920x1080)
```dotenv
RUN_CMD: 'npx playwright test --project=chromium --update-snapshots'
```

### Update all screenshots (default resolution is 1920x1080)
```dotenv
RUN_CMD: 'npx playwright test --update-snapshots'
```

### Update all screenshots with custom resolution
```dotenv
RUN_CMD: 'npx playwright test --update-snapshots'
VIEWPORT_WIDTH: 1280
VIEWPORT_HEIGHT: 720
```

Select specific tests with additional options https://playwright.dev/docs/test-cli
```dotenv
RUN_CMD: 'npx playwright test -g "Connection lost" --update-snapshots'
```


Some test depends on har files with requests from the API. To update har files add option
```dotenv
RUN_CMD: 'npx playwright test -g "main page har"'
UPDATE_HAR: true
```
