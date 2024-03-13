export const REGISTER_MOCK_RESPONSE = {
  jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzA0LCJpYXQiOjE3MDk0ODU2ODUsImV4cCI6MTcxMjA3NzY4NX0.mA29fx1evfNC9IChOEzUSZUeMDYzO5dt-HJ5ZBh_IPE",
  user: {
    id: 304,
    username: "guest",
    email: "guest@plusnarrative.com",
    provider: "local",
    confirmed: true,
    blocked: false,
    createdAt: "2024-03-03T17:08:05.273Z",
    updatedAt: "2024-03-03T17:08:05.273Z"
  }
};

export const LOGIN_MOCK_RESPONSE = {
  jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzA0LCJpYXQiOjE3MDk0ODU2ODUsImV4cCI6MTcxMjA3NzY4NX0.mA29fx1evfNC9IChOEzUSZUeMDYzO5dt-HJ5ZBh_IPE",
  user: {
    id: 304,
    username: "guest",
    email: "guest@plusnarrative.com",
    provider: "local",
    confirmed: true,
    blocked: false,
    createdAt: "2024-03-03T17:08:05.273Z",
    updatedAt: "2024-03-03T17:08:05.273Z"
  }
};

export const ERROR_MOCK_RESPONSE = {
  data: null,
  error: {
    status: 400,
    name: "ValidationError",
    message: "Invalid Identifier or password",
    details: {}
  }
}

export const CHOWS_MOCK_RESPONSE = {
  data:
    [
      {
        id: 1,
        attributes: {
          Title: "Carrots",
          Description: "The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia.\n\nA medium-size carrot has 25 calories, 6 grams of carbs, and 2 grams of fiber. The veggie is an excellent source of vitamin A, providing more than 200% of your daily requirement in just one carrot. Carrots are loaded with beta-carotene, a natural chemical that the body changes into vitamin A.",
          createdAt: "2022-02-14T17:02:12.570Z",
          updatedAt: "2022-02-14T17:02:15.535Z",
          publishedAt: "2022-02-14T17:02:15.533Z",
          Image: {
            data: [
              {
                id: 1,
                attributes: {
                  name: "carrots.jpeg",
                  alternativeText: "carrots.jpeg",
                  caption: "carrots.jpeg",
                  width: 1200,
                  height: 740,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_carrots.jpeg",
                      hash: "thumbnail_carrots_f0e8e6217a",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 245,
                      height: 151,
                      size: 11.38,
                      path: null,
                      url: "/uploads/thumbnail_carrots_f0e8e6217a.jpeg"
                    },
                    large: {
                      name: "large_carrots.jpeg",
                      hash: "large_carrots_f0e8e6217a",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 1000,
                      height: 617,
                      size: 98.72,
                      path: null,
                      url: "/uploads/large_carrots_f0e8e6217a.jpeg"
                    },
                    medium: {
                      name: "medium_carrots.jpeg",
                      hash: "medium_carrots_f0e8e6217a",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 750,
                      height: 463,
                      size: 65.61,
                      path: null,
                      url: "/uploads/medium_carrots_f0e8e6217a.jpeg"
                    },
                    small: {
                      name: "small_carrots.jpeg",
                      hash: "small_carrots_f0e8e6217a",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 500,
                      height: 308,
                      size: 36.27,
                      path: null,
                      url: "/uploads/small_carrots_f0e8e6217a.jpeg"
                    }
                  },
                  hash: "carrots_f0e8e6217a",
                  ext: ".jpeg",
                  mime: "image/jpeg",
                  size: 84.25,
                  url: "/uploads/carrots_f0e8e6217a.jpeg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-02-14T17:01:55.132Z",
                  updatedAt: "2022-02-14T17:01:55.132Z"
                }
              },
              {
                id: 2,
                attributes: {
                  name: "carrots-3.jpeg",
                  alternativeText: "carrots-3.jpeg",
                  caption: "carrots-3.jpeg",
                  width: 1155,
                  height: 648,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_carrots-3.jpeg",
                      hash: "thumbnail_carrots_3_60f5a864c1",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 245,
                      height: 137,
                      size: 11.26,
                      path: null,
                      url: "/uploads/thumbnail_carrots_3_60f5a864c1.jpeg"
                    },
                    large: {
                      name: "large_carrots-3.jpeg",
                      hash: "large_carrots_3_60f5a864c1",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 1000,
                      height: 561,
                      size: 136.7,
                      path: null,
                      url: "/uploads/large_carrots_3_60f5a864c1.jpeg"
                    },
                    medium: {
                      name: "medium_carrots-3.jpeg",
                      hash: "medium_carrots_3_60f5a864c1",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 750,
                      height: 421,
                      size: 84.58,
                      path: null,
                      url: "/uploads/medium_carrots_3_60f5a864c1.jpeg"
                    },
                    small: {
                      name: "small_carrots-3.jpeg",
                      hash: "small_carrots_3_60f5a864c1",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 500,
                      height: 281,
                      size: 40,
                      path: null,
                      url: "/uploads/small_carrots_3_60f5a864c1.jpeg"
                    }
                  },
                  hash: "carrots_3_60f5a864c1",
                  ext: ".jpeg",
                  mime: "image/jpeg",
                  size: 134.23,
                  url: "/uploads/carrots_3_60f5a864c1.jpeg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-02-14T17:01:55.204Z",
                  updatedAt: "2022-02-14T17:01:55.204Z"
                }
              },
              {
                id: 3,
                attributes: {
                  name: "carrots-2.jpeg",
                  alternativeText: "carrots-2.jpeg",
                  caption: "carrots-2.jpeg",
                  width: 2500,
                  height: 1667,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_carrots-2.jpeg",
                      hash: "thumbnail_carrots_2_0a682e61c9",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 234,
                      height: 156,
                      size: 14.06,
                      path: null,
                      url: "/uploads/thumbnail_carrots_2_0a682e61c9.jpeg"
                    },
                    large: {
                      name: "large_carrots-2.jpeg",
                      hash: "large_carrots_2_0a682e61c9",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 1000,
                      height: 667,
                      size: 173.03,
                      path: null,
                      url: "/uploads/large_carrots_2_0a682e61c9.jpeg"
                    },
                    medium: {
                      name: "medium_carrots-2.jpeg",
                      hash: "medium_carrots_2_0a682e61c9",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 750,
                      height: 500,
                      size: 106.39,
                      path: null,
                      url: "/uploads/medium_carrots_2_0a682e61c9.jpeg"
                    },
                    small: {
                      name: "small_carrots-2.jpeg",
                      hash: "small_carrots_2_0a682e61c9",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 500,
                      height: 333,
                      size: 53.09,
                      path: null,
                      url: "/uploads/small_carrots_2_0a682e61c9.jpeg"
                    }
                  },
                  hash: "carrots_2_0a682e61c9",
                  ext: ".jpeg",
                  mime: "image/jpeg",
                  size: 792.18,
                  url: "/uploads/carrots_2_0a682e61c9.jpeg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-02-14T17:01:56.045Z",
                  updatedAt: "2022-02-14T17:01:56.045Z"
                }
              }
            ]
          }
        }
      },
      {
        id: 2,
        attributes: {
          Title: "Hamburger",
          Description: "A hamburger (or burger for short) is a food, which in American English is considered a sandwich consisting of one or more cooked patties—usually ground meat, typically beef—placed inside a sliced bread roll or bun.\n\nThe patty may be pan fried, grilled, smoked or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis; condiments such as ketchup, mustard, mayonnaise, relish, or a \`special sauce\`, often a variation of Thousand Island dressing; and are frequently placed on sesame seed buns.",
          createdAt: "2022-02-14T17:03:24.106Z",
          updatedAt: "2022-02-14T17:03:28.932Z",
          publishedAt: "2022-02-14T17:03:28.931Z",
          Image: {
            data: [
              {
                id: 4,
                attributes: {
                  name: "hamburger.jpeg",
                  alternativeText: "hamburger.jpeg",
                  caption: "hamburger.jpeg",
                  width: 279,
                  height: 181,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_hamburger.jpeg",
                      hash: "thumbnail_hamburger_3111cba13b",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 240,
                      height: 156,
                      size: 8.8,
                      path: null,
                      url: "/uploads/thumbnail_hamburger_3111cba13b.jpeg"
                    }
                  },
                  hash: "hamburger_3111cba13b",
                  ext: ".jpeg",
                  mime: "image/jpeg",
                  size: 8.04,
                  url: "/uploads/hamburger_3111cba13b.jpeg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-02-14T17:03:17.427Z",
                  updatedAt: "2022-02-14T17:03:17.427Z"
                }
              },
              {
                id: 5,
                attributes: {
                  name: "hamburger-2.jpeg",
                  alternativeText: "hamburger-2.jpeg",
                  caption: "hamburger-2.jpeg",
                  width: 1920,
                  height: 1080,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_hamburger-2.jpeg",
                      hash: "thumbnail_hamburger_2_f724165190",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 245,
                      height: 138,
                      size: 12.38,
                      path: null,
                      url: "/uploads/thumbnail_hamburger_2_f724165190.jpeg"
                    },
                    large: {
                      name: "large_hamburger-2.jpeg",
                      hash: "large_hamburger_2_f724165190",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 1000,
                      height: 563,
                      size: 124.33,
                      path: null,
                      url: "/uploads/large_hamburger_2_f724165190.jpeg"
                    },
                    medium: {
                      name: "medium_hamburger-2.jpeg",
                      hash: "medium_hamburger_2_f724165190",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 750,
                      height: 422,
                      size: 78.47,
                      path: null,
                      url: "/uploads/medium_hamburger_2_f724165190.jpeg"
                    },
                    small: {
                      name: "small_hamburger-2.jpeg",
                      hash: "small_hamburger_2_f724165190",
                      ext: ".jpeg",
                      mime: "image/jpeg",
                      width: 500,
                      height: 281,
                      size: 41.43,
                      path: null,
                      url: "/uploads/small_hamburger_2_f724165190.jpeg"
                    }
                  },
                  hash: "hamburger_2_f724165190",
                  ext: ".jpeg",
                  mime: "image/jpeg",
                  size: 274.69,
                  url: "/uploads/hamburger_2_f724165190.jpeg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-02-14T17:03:18.267Z",
                  updatedAt: "2022-02-14T17:03:18.267Z"
                }
              }
            ]
          }
        }
      }
    ]
};