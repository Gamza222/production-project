import z from 'zod'
import { createProfileSchema } from 'enitities/Profile/lib/validators/profileSchema/profileSchema'

export type Profile = z.infer<ReturnType<typeof createProfileSchema>>

export type ProfileUpdateData = Partial<Profile>