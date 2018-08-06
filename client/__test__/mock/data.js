export const uploadImage = {
  name: 'Baked.jpg',
  lastModified: 1515159157000,
  size: 226679,
  type: 'image/jpeg',
  webkitRelativePath: ''
};

export const business = {
  id: 1,
  name: 'name',
  description: 'description',
  phoneNumber: 'phoneNumber',
  address: 'address',
  image: 'cloudImageUrl',
  imageFile: 'cloudImageUrl',
  location: 'location',
  category: 'category',
  website: 'website'
};

export const business2 = {
  name: 'name',
  description: 'description',
  phoneNumber: 'phoneNumber',
  address: 'address',
  image: uploadImage,
  location: 'location',
  category: 'category',
  website: 'website'
};

export const updatebusiness = {
  name: 'name',
  description: 'description',
  phoneNumber: 'phoneNumber',
  address: 'address',
  imageFile: uploadImage,
  location: 'location',
  category: 'category',
  website: 'website'
};

export const review = {
  id: 2,
  context: 'nice business',
  userId: 4,
  businessId: 5,
  rating: 3,
  reviewer: {
    firstname: 'Sandra',
    lastname: 'Agbala',
    image: 'https://res.cloudinary.com/annmary/image/upload/v1530638224/n2inrs1sfydcbwdmv9un.jpg'
  }
};

export const user = {
  id: 1,
  firstname: 'Annmary',
  lastname: 'Agunanna',
  email: 'annmaryamaka@gmail.com',
  image: 'cloudImageUrl'
};

export const userUpdate = {
  id: 1,
  firstname: 'Annmary',
  lastname: 'Agunanna',
  email: 'annmaryamaka@gmail.com',
  image: uploadImage
};
export const imageResponse = {
  bytes: 88762,
  created_at: '2018-01-15T18:30:03Z',
  etag: '5e60d0b985e448a2d19dd7b3183448d3',
  format: 'jpg',
  height: 600,
  original_filename: '171761',
  placeholder: false,
  public_id: 'ibjszrugqgqlkc2q9x0y',
  resource_type: 'image',
  secure_url: 'https://res.cloudinary.com/ruqoyah/image/upload/v1516041003/ibjszrugqgqlkc2q9x0y.jpg',
  signature: 'ec119873ac7388df8ab37c0c7e2a23c0a6107a14',
  tags: [],
  type: 'upload',
  url: 'http://res.cloudinary.com/ruqoyah/image/upload/v1516041003/ibjszrugqgqlkc2q9x0y.jpg',
  version: 1516041003,
  width: 600
};

