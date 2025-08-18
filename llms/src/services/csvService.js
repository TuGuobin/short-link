import fs from "fs"
import { Config } from "../config/env.js"

class CsvService {
  constructor() {
    this.csvPath = Config.csvFilePath
    this.appList = []
    this.formattedAppList = ""
  }

  async loadData() {
    try {
      const csvData = fs.readFileSync(this.csvPath, "utf-8")
      this.appList = csvData
        .split("\n")
        .slice(1)
        .filter((line) => line.trim())
        .map((line) => {
          const [category, appName, action, urlScheme] = line.split("|")
          return {
            category: category.trim(),
            appName: appName.trim(),
            action: action.trim(),
            urlScheme: urlScheme.trim(),
          }
        })

      this.formattedAppList = this.appList.map((item) => `${item.appName || "无应用名称"} - ${item.action || "无操作"} - ${item.urlScheme}`).join("\n")

      return this.appList
    } catch (error) {
      console.error("Failed to load CSV data:", error)
      throw error
    }
  }

  getFormattedAppList() {
    return this.formattedAppList
  }
}

export default new CsvService()
