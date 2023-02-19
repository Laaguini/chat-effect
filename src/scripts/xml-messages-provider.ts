import type { MessagesProvider } from "../types";

class XMLMessagesProvider {
    constructor(private url: string){}

    public async provide(): Promise<MessagesProvider> {
        const XMLText = await this.fetchXMLData()

        return this.parseXMLData(XMLText)
    }

    private async fetchXMLData() {
        const response = await fetch(this.url)
        return await response.text()
    }

    private async parseXMLData(text: string) {
        const parsed = [...text.matchAll(/<message(?: (own))?>\s*(.*?)\s*<\/message>/gms)]
        const prepared = parsed.map(e => ({isOwn: Boolean(e[1]), text: e[2]}))

        return prepared
    }
}

export default XMLMessagesProvider