import axios from "axios";

export const enviarDonacion = async (values) => {
  const URL = "https://api.mercadopago.com/checkout/preferences";

  const data = {
    items: [
      {
        "title": "Donación ONG Somos más",
        "quantity": 1,
        "unit_price": values.ammount,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/gracias",
    },
    payment_methods: {
      excluded_payment_methods: [
        {
          id: "atm",
        },
      ],
      excluded_payment_types: [
        {
          id: "ticket",
        },
      ],
    },
  };

  const headers = {
    Authorization:
      "Bearer APP_USR-5811521037381417-032702-76bc4d6c51dc182ae690dd2e7a06e68c-162205422",
    "Content-Type": "application/json",
  };

  axios
    .post(URL, data, { headers })
    .then((response) => {
      window.location.href = response.data.sandbox_init_point;
    })
    .catch((err) => console.log(err));
};
