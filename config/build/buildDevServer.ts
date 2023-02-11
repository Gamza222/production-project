import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfigorations } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfigorations {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
} 
