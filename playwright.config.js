import 'dotenv/config'
import { defineConfig, devices } from '@playwright/test'
import { config } from './main/framework/config/config'


module.exports = defineConfig({
    headless: true,
    testDir: './main/tests',
    timeout: 60000,
    fullyParallel: true,
    retries: 1,
    reporter: [
        ['list'],
        ['allure-playwright', {
            outputFolder: 'allure-results',
            environmentInfo: {
                E2E_NODE_VERSION: process.version,
                E2E_OS: process.platform
            }
        }]
    ],
    use: {
        baseURL: 'https://bankrot.fedresurs.ru/',
        screenshot: 'only-on-failure',
        // trace: 'retain-on-failure',
        video: 'retain-on-failure'
    },
    expect: {
        timeout: 30000
    },
    snapshotPathTemplate: `{testDir}/__screenshots__/{testFilePath}/{platform}/{arg}/{projectName}-${ config.VIEWPORT_WIDTH }x${ config.VIEWPORT_HEIGHT }{ext}`,

    projects: [
        {
            name: `chromium`,
            testDir: './main/tests/visual',
            use: {
                ...devices['Desktop Chrome'],
                viewport: {
                    width: config.VIEWPORT_WIDTH,
                    height: config.VIEWPORT_HEIGHT
                },
                storageState: './main/framework/storageStates/acceptedCookie.json'
            }
        },
        {
            name: `firefox`,
            testDir: './main/tests/visual',
            use: {
                ...devices['Desktop Firefox'],
                viewport: {
                    width: config.VIEWPORT_WIDTH,
                    height: config.VIEWPORT_HEIGHT
                },
                storageState: './main/framework/storageStates/acceptedCookie.json'
            }
        },
        {
            name: `webkit`,
            testDir: './main/tests/visual',
            use: {
                ...devices['Desktop Safari'],
                viewport: {
                    width: config.VIEWPORT_WIDTH,
                    height: config.VIEWPORT_HEIGHT
                },
                storageState: './main/framework/storageStates/acceptedCookie.json'
            }
        }
    ]
})
