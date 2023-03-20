
import ServiceController from '@/coupon-service/ServiceController'
import { serviceConfig } from '@/config';
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

const namespace = 'coupon-service'

api.get('/personEntities')
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
      })
}

export default ServiceController.build(api, serviceConfig[namespace])

