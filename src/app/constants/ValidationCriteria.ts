export const Name = {
  minLength: 3,
  type: String,
  maxLength: 25,
  required: true
};

export const Age = {
  type: Number
};

export const Email = {
  type: String,
  required: true
};

export const Password = {
  minLength: 8,
  type: String,
  maxLength: 25,
  required: true
};
