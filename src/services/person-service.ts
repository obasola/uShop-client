import { ref } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

setup () {
  const $q = useQuasar()
  const data = ref(null)

  function loadData () {
    api.get('/api/backend')
      .then((response) => {
        data.value = response.data
      })
      .catch(() => {
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      }),

  }
  function postData() {

    const postData = {
      title: this.$refs.post_title.value,
      description: this.$refs.post_description.value,
    };

    try {
      const res = await http.post("/tutorials", postData, {
        headers: {
          "x-access-token": "token-value",
        },
      });

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };

      this.postResult = this.fortmatResponse(result);
    } catch (err) {
      this.postResult = this.fortmatResponse(err.response?.data) || err;
    }
  }
