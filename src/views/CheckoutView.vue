<template>
<div class="min-w-screen min-h-screen bg-gray-50 py-5">
  <div class="px-5">
    <div class="mb-2">
      <p class="mb-4 pt-3 text-3xl font-black leading-10 text-gray-800 dark:text-white lg:text-4xl">Checkout</p>
    </div>
  </div>
  <div class="w-full border-b border-t border-gray-200 bg-white px-5 py-10 text-gray-800">
    <div class="w-full">
      <div class="-mx-3 items-start md:flex">
        <div class="px-3 md:w-7/12 lg:pr-10">
          <div class="mx-auto mb-6 w-full border-b border-gray-200 pb-6 font-light text-gray-800">
            <div>
              <div class="mb-3">
                <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Full name</label>
                <div>
                  <input v-bind="name" class="mb-1 w-full rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none" placeholder="Scott Windon" type="text" />
                  <span class="text-red-500">{{ formErrors['name'] }}</span>
                </div>
              </div>
              <div class="mb-3">
                <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Address</label>
                <div>
                  <input v-bind="address" class="mb-1 w-full rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none" placeholder="123 George Street, Sydney, NSW 2000 Australia" type="text" />
                  <span class="text-red-500">{{ formErrors['address'] }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-6 border-b border-gray-200 pb-6">
            <div class="-mx-2 flex items-end justify-end">
              <div class="flex-grow px-2 lg:max-w-xs">
                <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Discount code</label>
                <div>
                  <input class="w-full rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none" placeholder="XXXXXX" type="text" />
                </div>
              </div>
              <div class="px-2">
                <button class="mx-auto block w-full max-w-xs rounded-md border border-transparent bg-gray-400 px-5 py-2 font-semibold text-white hover:bg-gray-500 focus:bg-gray-500">APPLY</button>
              </div>
            </div>
          </div>
          <div class="mb-6 border-b border-gray-200 pb-6 text-xl text-gray-800 md:border-none">
            <div class="flex w-full items-center">
              <div class="flex-grow">
                <span class="text-gray-600">Total</span>
              </div>
              <div class="pl-3">
                <span class="text-sm font-semibold text-gray-400">USD</span> <span class="font-semibold">$210.00</span>
            </div>
            </div>
          </div>
        </div>
        <div class="px-3 md:w-5/12">
          <div class="mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white p-3 font-light text-gray-800">
            <div class="mb-3 flex w-full items-center">
              <div class="w-32">
                <span class="font-semibold text-gray-600">Contact</span>
              </div>
              <div class="flex-grow pl-3">
                <span>{{ name.value }}</span>
              </div>
            </div>
            <div class="flex w-full items-center">
              <div class="w-32">
                <span class="font-semibold text-gray-600">Address</span>
              </div>
              <div class="flex-grow pl-3">
                <span>{{ address.value }}</span>
              </div>
            </div>
          </div>
          <div class="mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white font-light text-gray-800">
            <div class="w-full border-b border-gray-200 p-3">
              <div class="mb-5">
                <label for="type1" class="flex cursor-pointer items-center">
                  <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                  <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="ml-3 h-6" />
                </label>
              </div>
              <div>
                <div class="mb-3">
                  <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Name on card</label>
                  <div>
                    <input class="mb-1 w-full rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none" placeholder="Scott Windon" type="text" />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Card number</label>
                  <div>
                    <input class="mb-1 w-full rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none" placeholder="0000 0000 0000 0000" type="text" />
                  </div>
                </div>
                <div class="-mx-2 mb-3 flex items-end">
                  <div class="w-1/4 px-2">
                    <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Expiration date</label>
                    <div>
                      <select class="form-select mb-1 w-full cursor-pointer rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none">
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-1/4 px-2">
                    <select class="form-select mb-1 w-full cursor-pointer rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none">
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                  </div>
                  <div class="w-1/4 px-2">
                    <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Security code</label>
                    <div>
                      <input class="mb-1 w-full rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none" placeholder="000" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-3">
              <label for="type2" class="flex cursor-pointer items-center">
                <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" class="ml-3" />
              </label>
            </div>
          </div>
          <div>
            <button @click="onSubmit" class="mx-auto block w-full max-w-xs rounded-lg bg-indigo-500 px-3 py-2 font-semibold text-white hover:bg-indigo-700 focus:bg-indigo-700"><i class="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, reactive } from 'vue';

import { useForm } from 'vee-validate';
import * as yup from 'yup';

let formErrors = reactive({})
const { values, errors, defineInputBinds, handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required(),
    address: yup.string().required(),
  }),
});
formErrors = errors;

const name = defineInputBinds('name');
const address = defineInputBinds('address');


const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});
</script>