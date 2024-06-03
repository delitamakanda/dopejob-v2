import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import job from '../pages/help.vue'

describe('help', () => {
    it('render the message correctly', async() => {
        const wrapper = await mountSuspended(job)
        expect(wrapper.text()).toContain('Help')
    })
})