interface IAuthStore {
	email: string
	name: string
	status: boolean
}

const defautValue: { user: IAuthStore } = {
	user: {
		email: '',
		name: '',
		status: false,
	},
}

export const useAuthStore = defineStore('auth', {
	state: () => defautValue,
	getters: {
		isAuth: state => state.user.status,
	},
	actions: {
		clear() {
			this.$patch(defautValue)
		},

		set(input: IAuthStore) {
			this.$patch({ user: input })
		},
	},
})

// loading status store
export const useIsLoadingStore = defineStore('isLoading', {
	state: () => ({
		isLoading: true,
	}),
	actions: {
		set(data: boolean) {
			this.$patch({ isLoading: data })
		},
	},
})
