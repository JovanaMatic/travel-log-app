import { z } from 'zod'

import tryPassEnv from './try-pass-env.js'

const EnvSchema = z.object({
  NODE_ENV: z.string(),
})

export type EnvSchema = z.infer<typeof EnvSchema>

tryPassEnv(EnvSchema)

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env)
