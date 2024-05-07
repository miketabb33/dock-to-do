type Environment = {
  useInMemoryDatabase: boolean
  postgresConnectionString: string
}

const DEV: Environment = {
  useInMemoryDatabase: false,
  postgresConnectionString: 'postgresql://postgres:password123@db/example',
}

const PROD: Environment = {
  useInMemoryDatabase: false,
  postgresConnectionString:
    'postgres://dock_to_do_db_user:pczNlLiZbCe3mOKI938f2w2cAcQw6Tet@dpg-cot0lc2cn0vc73esdvp0-a.oregon-postgres.render.com/dock_to_do_db?ssl=true',
}

const getEnv = () => {
  if (SITE_ENV === 'production') return PROD
  return DEV
}

export const ENV = getEnv()
