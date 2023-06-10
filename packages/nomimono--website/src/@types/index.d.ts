export namespace Api {
	export interface BaseResponse {
		ok?: boolean
		error?: Error
		result?: {
			items?: object[]
			paginate?: Paginate
		}
	}

	export type Error =
		| {
				message?: string
				items?: string[]
				validate?: string[]
				internalError?: boolean
				notFound?: boolean
				unauth?: boolean
		  }
		| null
		| undefined
}
