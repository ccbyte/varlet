import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import address from 'address'
import logger from '../shared/logger'
import { getPort } from 'portfinder'
import { ensureDirSync } from 'fs-extra'
import { getDevConfig } from '../config/webpack.dev.config'
import { SRC_DIR } from '../shared/constant'

export function runDevServer(port: number, config: any) {
  const { host } = config.devServer
  config.devServer.port = port
  const server = new WebpackDevServer(webpack(config), config.devServer)

  ;(server as any).showStatus = function () {}

  server.listen(port, host === 'localhost' ? '0.0.0.0' : host, (err?: Error) => {
    if (err) {
      logger.error(err.toString())
      return
    }

    logger.success(`  Server running at:`)
    logger.success(`  Local: http://${host}:${port}`)
    logger.success(`  Network: http://${address.ip()}:${port}\n`)
  })
}

export async function dev() {
  process.env.NODE_ENV = 'development'
  ensureDirSync(SRC_DIR)

  const config = getDevConfig()
  const { port } = config.devServer
  getPort(
    {
      port,
    },
    (err: Error, port: number) => {
      if (err) {
        logger.error(err.toString())
        return
      }
      runDevServer(port, config)
    }
  )
}