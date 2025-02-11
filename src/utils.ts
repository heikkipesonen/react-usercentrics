const IS_BROWSER = typeof window !== 'undefined'

import type {
    ConsentType,
    ServiceFullInfo,
    ServiceId,
    ServiceInfo,
    ServiceInfoFromLocalStorage,
    SettingsFromLocalStorage,
    UCWindow,
} from './types.js'

/**
 * Programmatic way to show First Layer.
 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=showfirstlayer
 *
 * @example showFirstLayer()
 */
export const showFirstLayer = (): void => {
    if (IS_BROWSER) {
        /**
         * This file type-casts the Window to possibly include `window.UC_UI`, which is the
         * main entry point for Usercentrics integration. It is intentionally not declared
         * globally so that it wouldn't get used directly somewhere else in the code, but
         * always through these utils.
         */
        ;(window as UCWindow).UC_UI?.showFirstLayer?.()
    }
}

/**
 * Programmatic way to show Second Layer. If a service/vendor Id value is passed,
 * Second Layer will open the right tab, scroll to the given service/vendor entry and expand it.
 * If no Id is passed, Second Layer will be shown without srcolling to any specific service/vendor.
 *
 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=showsecondlayer
 *
 * @example showSecondLayer('my-service-id')
 * @example showSecondLayer()
 */
export const showSecondLayer = (serviceId?: ServiceId): void => {
    if (IS_BROWSER) {
        ;(window as UCWindow).UC_UI?.showSecondLayer?.(serviceId)
    }
}

/**
 * A method to get array of all services with their basic information
 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=getservicesbaseinfo
 *
 * @example
 * const services = getServicesBaseInfo()
 * const myService = services.find((service) => service.id === 'my-service-id')
 */
export const getServicesBaseInfo = (): ServiceInfo[] =>
    (IS_BROWSER && (window as UCWindow).UC_UI?.getServicesBaseInfo?.()) || []

/**
 * A method to get array of all services from local storage
 *
 * @example
 * const services = getServicesFromLocalStorage()
 * const myService = services.find((service) => service.id === 'my-service-id')
 */
export const getServicesFromLocalStorage = (): ServiceInfoFromLocalStorage[] => {
    const ucSettings = IS_BROWSER && localStorage?.getItem('uc_settings')
    if (ucSettings) {
        try {
            const ucSettingsObj = JSON.parse(ucSettings) as SettingsFromLocalStorage
            /** Leave out any other untyped fields */
            return ucSettingsObj.services.map(({ id, status }) => ({ id, status }))
        } catch {
            /** Ignore failures */
        }
    }

    return []
}

/**
 * A method to check if user has interacted with the consent prompt and given consent information.
 *
 * @example
 * const userInteracted = hasUserInteracted()
 * if (userInteracted) {
 *  actionRequiredConsentInfoGiven()
 * }
 */
export const hasUserInteracted = (): boolean => {
    const userInteraction = IS_BROWSER && localStorage?.getItem('uc_user_interaction')
    return userInteraction === 'true'
}

/**
 * A method to get array of all services with their full information.
 * An extra api request will be made, therefore the return represents
 * the eventual completion (or failure) of an asynchronous operation
 * and its returning value.
 *
 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=getservicesfullinfo
 *
 * @example
 * const services = await getServicesFullInfo()
 * const myService = services.find((service) => service.id === 'my-service-id')
 */
export const getServicesFullInfo = async (): Promise<ServiceFullInfo[]> =>
    (IS_BROWSER && (window as UCWindow).UC_UI?.getServicesFullInfo?.()) || []

/**
 * Returns true if Usercentrics service has been given consent
 *
 * @example
 * const services = getServicesBaseInfo()
 * const myService = services.find((service) => service.id === 'my-service-id')
 * const hasConsent = hasServiceConsent(myService)
 *
 * if (hasConsent) {
 *   loadMyService()
 * }
 */
export const hasServiceConsent = (service: ServiceInfo | null): boolean => !!service?.consent.status

/**
 * A method for accepting a single service.
 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=acceptservice
 */
export const acceptService = async (serviceId: ServiceId, consentType?: ConsentType) => {
    if (IS_BROWSER) {
        await (window as UCWindow).UC_UI?.acceptService?.(serviceId, consentType)
    }
}
