export const max2d = (arr: [string, number][]) => {
  const obj = { name: arr[0][0], val: arr[0][1] };
  arr.map((item) => {
    if (item[1] > obj.val) {
      obj.val = item[1];
      obj.name = item[0];
    }
  });
  return obj;
};

export const predsDetails = (obj: string) => {
  switch (obj) {
    case 'Melanoma':
      return `Melanoma is a type of skin cancer that can be deadly if not detected and treated early. It often appears as a dark or unusual mole, and seeking medical attention promptly can greatly increase the chances of successful treatment. It is important to protect your skin from the sun's harmful UV rays to reduce your risk of developing melanoma. This includes wearing protective clothing, applying sunscreen regularly, and avoiding sun exposure during peak hours`;
    case 'Melanocytic Nevus':
      return 'A melanocytic nevus is a type of mole that occurs when melanocytes, the cells responsible for producing pigment in the skin, grow in clusters. Most melanocytic nevi are harmless, but some may develop into melanoma, a type of skin cancer. Regular skin checks and monitoring changes in moles are important for early detection and treatment of potential skin cancer';
    case 'Basal Cell Carcinoma':
      return 'Basal cell carcinoma (BCC) is the most common type of skin cancer, and it often appears as a small, shiny bump or a pink growth on the skin. BCC develops in the basal cells, which are responsible for producing new skin cells. It typically grows slowly and rarely spreads to other parts of the body, but if left untreated, it can cause damage to surrounding tissues and bone. BCC is usually treated by surgery, radiation therapy, or topical medications. It is important to regularly check your skin for any changes and consult a dermatologist if you notice any suspicious growths';
    case 'Actinic Keratosis':
      return 'Actinic keratosis is a skin condition characterized by rough, scaly patches or lesions that appear on sun-exposed areas of the skin, such as the face, scalp, hands, and arms. It is caused by long-term exposure to ultraviolet (UV) radiation from the sun. Actinic keratosis is considered a pre-cancerous condition, as it has the potential to develop into squamous cell carcinoma, a type of skin cancer. Therefore, it is important to seek medical attention if you notice any suspicious skin changes or lesions. Treatment options for actinic keratosis include cryotherapy, topical medications, and photodynamic therapy';
    case 'Benign Keratosis':
      return 'Benign keratosis refers to a group of non-cancerous skin growths that are common in adults. This group includes various types such as solar lentigo, seborrheic keratosis, and lichen planus-like keratosis. These growths usually develop due to long-term sun exposure or aging, and they are generally harmless. However, in rare cases, they may resemble malignant skin lesions, so it is important to have them checked by a dermatologist to rule out any potential cancerous growths';
    case 'Dermatofibroma':
      return 'Dermatofibroma is a benign skin growth that usually appears as a small, firm bump on the skin. It is typically brown or reddish-brown in color and often develops on the legs, though it can occur anywhere on the body. While it is generally harmless, some people may experience itching or tenderness around the affected area. If you notice any changes in the size, shape, or color of a dermatofibroma, it is important to have it evaluated by a healthcare professional to rule out any potential concerns';
    case 'Vascular Lesion':
      return 'Vascular lesions are skin abnormalities caused by abnormalities in the blood vessels. They can be classified into two types: vascular malformations and vascular tumors. Vascular malformations are caused by errors in the development of the blood vessels, while vascular tumors are caused by the overgrowth of blood vessel cells. Vascular lesions can appear as red, purple, or blue discolorations on the skin, and may be present at birth or develop later in life. While most vascular lesions are benign, some can cause cosmetic concerns or be indicative of an underlying medical condition';
    case 'Squamous Cell Carcinoma':
      return 'Squamous cell carcinoma is a type of skin cancer that commonly appears on sun-exposed areas of the body. It can grow quickly and may spread to other parts of the body, making early detection and treatment important. Common symptoms include a firm, red nodule or a flat, scaly and crusty lesion. Seeking medical attention is necessary for proper diagnosis and treatment';
    default:
      return 'No type of skin cancer was detected in the uploaded image. However, it is still important to regularly monitor your skin for any changes or abnormalities and seek medical attention if you notice anything concerning. It is recommended to have a dermatologist perform a full skin exam at least once a year to check for any potential skin issues';
  }
};
