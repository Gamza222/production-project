
import ProfileCard from './ui/ProfileCard/ProfileCard'
import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from './model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'

export type {
    Profile,
    ProfileSchema
} from './model/types/profile'

export {
    profileActions,
    profileReducer
} from './model/slice/profileSlice'

export {
    fetchProfileData
} from './model/services/fetchProfileData/fetchProfileData'

export { ProfileCard, getProfileData, getProfileIsLoading, getProfileError, getProfileReadonly }
