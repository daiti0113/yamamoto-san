// TODO: Orval に移行するのが良さそう
// https://orval.dev/

import {
  DefaultApi
} from "@/types/typescript-axios/api"

import { Configuration } from "@/types/typescript-axios/configuration"

import axios from "axios"

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL
})

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true
})

const defaultApi = new DefaultApi(config, "", axiosInstance)

export {
  defaultApi
}
