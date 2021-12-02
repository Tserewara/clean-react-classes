import { HttpPostClient, HttpPostParams } from '@/data/protocols/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
  }
}