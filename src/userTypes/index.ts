/**
 * These types are explicitly intended to be imported by the user. We keep them separate for clarity
 * and so that they can be easily imported and used alongside the primary LLM class.
 */
import { ClientOptions } from 'openai'
import {
  ChatCompletion,
  ChatCompletionChunk,
  ChatCompletionTool as OpenAIChatCompletionTool,
  ChatCompletionMessageParam as OpenAICompletionMessageParam,
} from 'openai/resources/index'

export type ConfigOptions = Pick<ClientOptions, 'apiKey' | 'baseURL'> & {
  bedrock?: {
    region?: string
    accessKeyId?: string
    secretAccessKey?: string
  }
  /* @param vertex - The Vertex configuration object containing necessary credentials and settings
   * @param vertex.region - The Google Cloud region where the Vertex AI service is deployed
   * @param vertex.projectId - The Google Cloud project ID
   * @param vertex.serviceAccount - Base64-encoded service account credentials for Google Cloud authentication
   */
  vertex?: {
    region?: string
    projectId?: string
    serviceAccount?: string
  }
}

export type ChatCompletionChoice = Omit<
  ChatCompletion.Choice,
  'finish_reason'
> & {
  finish_reason: ChatCompletion.Choice['finish_reason'] | 'unknown'
}

export type ChatCompletionChunkChoice = Omit<
  ChatCompletionChunk.Choice,
  'finish_reason'
> & {
  finish_reason: ChatCompletionChunk.Choice['finish_reason'] | 'unknown'
}

type CompletionResponseFields = 'created' | 'model' | 'usage' | 'object'
export type CompletionResponse = Pick<
  ChatCompletion,
  CompletionResponseFields
> & {
  id: string | null
  choices: Array<ChatCompletionChoice>
}
export type CompletionResponseChunk = Pick<
  ChatCompletionChunk,
  CompletionResponseFields
> & {
  id: string | null
  choices: Array<ChatCompletionChunkChoice>
}
export type StreamCompletionResponse = AsyncIterable<CompletionResponseChunk>
export type ChatCompletionMessageParam = OpenAICompletionMessageParam
export type ChatCompletionTool = OpenAIChatCompletionTool
