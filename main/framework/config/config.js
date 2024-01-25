import 'dotenv/config'


export const config = {
    VIEWPORT_WIDTH: parseInt(process.env.VIEWPORT_WIDTH) || 1920,
    VIEWPORT_HEIGHT: parseInt(process.env.VIEWPORT_HEIGHT) || 1080
}
