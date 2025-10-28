import { createProfileSchema } from './profileSchema'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { type TFunction } from 'i18next'

describe('profileSchema.validation', () => {
    const mockT: TFunction = ((key: string) => `translated_${key}`) as TFunction

    const schema = createProfileSchema(mockT)

    const validProfile = {
        username: 'testuser123',
        first: 'John',
        lastname: 'Doe',
        age: 30,
        currency: Currency.USD,
        country: Country.Russia,
        city: 'Moscow',
        avatar: 'https://example.com/avatar.jpg'
    }

    describe('successful validation', () => {
        test('valid profile data should pass validation', () => {
            const result = schema.safeParse(validProfile)
            expect(result.success).toBe(true)
            if (result.success) {
                expect(result.data).toEqual(validProfile)
            }
        })

        test('valid profile with Cyrillic username should pass', () => {
            const profile = {
                ...validProfile,
                username: 'тест_user'
            }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(true)
        })

        test('valid profile with minimum age should pass', () => {
            const profile = {
                ...validProfile,
                age: 0
            }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(true)
        })

        test('valid profile with maximum age should pass', () => {
            const profile = {
                ...validProfile,
                age: 120
            }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(true)
        })

        test('valid profile with all currencies should pass', () => {
            Object.values(Currency).forEach(currency => {
                const profile = { ...validProfile, currency }
                const result = schema.safeParse(profile)
                expect(result.success).toBe(true)
            })
        })

        test('valid profile with all countries should pass', () => {
            Object.values(Country).forEach(country => {
                const profile = { ...validProfile, country }
                const result = schema.safeParse(profile)
                expect(result.success).toBe(true)
            })
        })
    })

    describe('first name validation', () => {
        test('empty first name should fail', () => {
            const profile = { ...validProfile, first: '' }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
            if (!result.success) {
                expect(result.error.issues[0].path).toEqual(['first'])
            }
        })

        test('first name over 15 chars should fail', () => {
            const profile = { ...validProfile, first: 'A'.repeat(16) }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
            if (!result.success) {
                expect(result.error.issues[0].path).toEqual(['first'])
            }
        })

        test('first name with 15 chars should pass', () => {
            const profile = { ...validProfile, first: 'A'.repeat(15) }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(true)
        })
    })

    describe('lastname validation', () => {
        test('empty lastname should fail', () => {
            const profile = { ...validProfile, lastname: '' }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
        })

        test('lastname over 15 chars should fail', () => {
            const profile = { ...validProfile, lastname: 'B'.repeat(16) }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
        })
    })

    describe('age validation', () => {
        test('negative age should fail', () => {
            const profile = { ...validProfile, age: -1 }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
            if (!result.success) {
                expect(result.error.issues[0].path).toEqual(['age'])
            }
        })

        test('age over 120 should fail', () => {
            const profile = { ...validProfile, age: 121 }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
            if (!result.success) {
                expect(result.error.issues[0].path).toEqual(['age'])
            }
        })

        test('age must be a number', () => {
            const profile = { ...validProfile, age: '30' as any }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
        })
    })

    describe('username validation', () => {
        test('username less than 3 chars should fail', () => {
            const profile = { ...validProfile, username: 'ab' }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
            if (!result.success) {
                expect(result.error.issues[0].path).toEqual(['username'])
            }
        })

        test('username with 3 chars should pass', () => {
            const profile = { ...validProfile, username: 'abc' }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(true)
        })

        test('username over 15 chars should fail', () => {
            const profile = { ...validProfile, username: 'a'.repeat(16) }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
        })

        test('username with invalid characters should fail', () => {
            const invalidUsernames = [
                'user space',
                'user@name',
                'user-name',
                'user.name',
                'user*name'
            ]

            invalidUsernames.forEach(username => {
                const profile = { ...validProfile, username }
                const result = schema.safeParse(profile)
                expect(result.success).toBe(false)
            })
        })

        test('username with only letters, numbers and underscore should pass', () => {
            const validUsernames = [
                'user123',
                'User_name',
                'тест123',
                '1_user_1'
            ]

            validUsernames.forEach(username => {
                const profile = { ...validProfile, username }
                const result = schema.safeParse(profile)
                expect(result.success).toBe(true)
            })
        })
    })

    describe('city validation', () => {
        test('empty city should fail', () => {
            const profile = { ...validProfile, city: '' }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
        })

        test('city over 20 chars should fail', () => {
            const profile = { ...validProfile, city: 'A'.repeat(21) }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
        })
    })

    describe('avatar validation', () => {
        test('invalid URL should fail', () => {
            const profile = { ...validProfile, avatar: 'not-a-url' }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
            if (!result.success) {
                expect(result.error.issues[0].path).toEqual(['avatar'])
            }
        })

        test('empty string should fail URL validation', () => {
            const profile = { ...validProfile, avatar: '' }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
        })

        test('valid HTTPS URL should pass', () => {
            const profile = { ...validProfile, avatar: 'https://example.com/image.jpg' }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(true)
        })

        test('valid HTTP URL should pass', () => {
            const profile = { ...validProfile, avatar: 'http://example.com/image.jpg' }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(true)
        })
    })

    describe('currency and country validation', () => {
        test('invalid currency should fail', () => {
            const profile = { ...validProfile, currency: 'INVALID' as any }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
        })

        test('invalid country should fail', () => {
            const profile = { ...validProfile, country: 'INVALID' as any }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
        })
    })

    describe('multiple fields validation', () => {
        test('all invalid fields should be reported', () => {
            const profile = {
                username: '',
                first: '',
                lastname: '',
                age: -1,
                currency: 'INVALID' as any,
                country: 'INVALID' as any,
                city: '',
                avatar: 'invalid'
            }
            const result = schema.safeParse(profile)
            expect(result.success).toBe(false)
            if (!result.success) {
                // Should have multiple errors
                expect(result.error.issues.length).toBeGreaterThan(1)
            }
        })

        test('missing required fields should fail', () => {
            const result = schema.safeParse({})
            expect(result.success).toBe(false)
            if (!result.success) {
                // Should have errors for all required fields
                expect(result.error.issues.length).toBeGreaterThan(5)
            }
        })
    })
})
