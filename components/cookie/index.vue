<template>
  <div>
    <!-- Modal -->
    <div class="fixed z-10 inset-0 overflow-y-auto" :class="{ 'hidden': !showModal }">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Background overlay -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true" @click="toggleModal">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- Modal content -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-52 rounded-full bg-red-100 sm:mx-0 sm:h-52 sm:w-52">
                <!-- Icon for the modal -->
                <img src="/img/stressed_out.png">
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  <!-- Title of the modal -->
                  Cookie Consent
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    <!-- Content of the modal -->
                    This website uses cookies to ensure you get the best experience. Please accept the use of cookies by clicking "Accept".
                  </p>
                  <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="acceptCookies">
              <!-- Accept button text -->
              Accept
            </button>
            <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="toggleModal">
              <!-- Cancel button text -->
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cookie',
  data() {
    return {
      showModal: false,
    }
  },
  mounted() {
    if (!localStorage.getItem('bp_cookieconsent')) {
      this.showModal = true;
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    acceptCookies() {
      localStorage.setItem('bp_cookieconsent', true);
      this.showModal = false;
    },
  },
};
</script>
<style>
/* Styling for the modal */
</style>
