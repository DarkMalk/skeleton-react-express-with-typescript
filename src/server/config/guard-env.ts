import 'dotenv/config'

const guardPort = (port: string | undefined): string => {
  if (!port) throw new Error(`Port is required`)

  return port
}

export const PORT = guardPort(process.env.PORT)
