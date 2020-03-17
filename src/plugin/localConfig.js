import _ from 'lodash'

const CONFIG_STORAGE_KEY = 'RSSANT_CONFIG'
const CONFIGS = {
  DEBUG: { defaultValue: false },
  PWA_ENABLE: { defaultValue: false },
}

const localConfig = (function() {
  const storage = window.localStorage
  const self = {
    enable: !_.isNil(storage),
    clear() {
      if (!self.enable) {
        return
      }
      storage.removeItem(CONFIG_STORAGE_KEY)
    },
    get(key, defaultValue) {
      if (!self.enable) {
        return defaultValue
      }
      let value = null
      let configData = storage.getItem(CONFIG_STORAGE_KEY)
      if (!_.isNil(configData)) {
        try {
          value = JSON.parse(configData)[key]
        } catch (ex) {
          // eslint-disable-next-line no-console
          console.error('Load local config failed: ' + ex)
          self.clear()
        }
      }
      return _.defaultTo(value, defaultValue)
    },
    set(key, value) {
      if (!self.enable) {
        return
      }
      let config = {}
      let configData = storage.getItem(CONFIG_STORAGE_KEY)
      if (!_.isNil(configData)) {
        config = JSON.parse(configData)
      }
      config[key] = value
      storage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config))
    },
  }

  /** all configs */
  _.forOwn(CONFIGS, (item, key) => {
    self[key] = {
      get() {
        return self.get(key, item.defaultValue)
      },
      set(value) {
        self.set(key, value)
      },
    }
  })

  return self
})()

export default localConfig