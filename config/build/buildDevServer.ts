import type { Configuration as DevServerConfigorations } from 'webpack-dev-server'
import type { BuildOptions } from './types/config'

export function buildDevServer (options: BuildOptions): DevServerConfigorations {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
