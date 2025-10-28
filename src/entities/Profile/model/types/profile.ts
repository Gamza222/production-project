import type z from 'zod'
import { type createProfileSchema } from 'entities/Profile/lib/validators/profileSchema/profileSchema'

export type Profile = z.infer<ReturnType<typeof createProfileSchema>>

export type ProfileUpdateData = Partial<Profile>
