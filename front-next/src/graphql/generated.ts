import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
  GenericScalar: any;
  Upload: any;
};

export type AccountInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ActivateAccount = {
  __typename?: 'ActivateAccount';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type AddToCart = {
  __typename?: 'AddToCart';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type ArticleType = {
  __typename?: 'ArticleType';
  body: Scalars['String'];
  create: Scalars['DateTime'];
  id: Scalars['ID'];
  iframe?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  numbersRating: Scalars['Float'];
  rating: Scalars['Decimal'];
  scopeAvrage: Scalars['Float'];
  slug: Scalars['String'];
  status: BlogArticleStatusChoices;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  update: Scalars['DateTime'];
  visit?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum BlogArticleStatusChoices {
  /** draft */
  D = 'D',
  /** publish */
  P = 'P'
}

export type CartType = {
  __typename?: 'CartType';
  carts?: Maybe<Scalars['GenericScalar']>;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  orders: Array<OrderType>;
  password: Scalars['String'];
  profile?: Maybe<ProfileType>;
  userComments: Array<CommentType>;
  username: Scalars['String'];
};

export type CategoryType = {
  __typename?: 'CategoryType';
  children: Array<CategoryType>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<CategoryType>;
  productSet: Array<ProductType>;
  slug: Scalars['String'];
};

export type ChangeEmail = {
  __typename?: 'ChangeEmail';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type ChangePassword = {
  __typename?: 'ChangePassword';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type CleareCartItem = {
  __typename?: 'CleareCartItem';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type ColorType = {
  __typename?: 'ColorType';
  color: Scalars['String'];
  id: Scalars['ID'];
  productSet: Array<ProductType>;
};

/** An enumeration. */
export enum CommentCommentRateChoices {
  /** very bad */
  A_1 = 'A_1',
  /** bad */
  A_2 = 'A_2',
  /** good */
  A_3 = 'A_3',
  /** very good */
  A_4 = 'A_4',
  /** excellent */
  A_5 = 'A_5'
}

export type CommentInput = {
  body: Scalars['String'];
  objectId: Scalars['ID'];
  parentId?: InputMaybe<Scalars['ID']>;
  rate: Scalars['Int'];
};

export type CommentType = {
  __typename?: 'CommentType';
  body: Scalars['String'];
  children: Array<CommentType>;
  create: Scalars['DateTime'];
  id: Scalars['ID'];
  objectId?: Maybe<Scalars['Int']>;
  parent?: Maybe<CommentType>;
  rate: CommentCommentRateChoices;
  user: CartType;
};

export type CreateAccount = {
  __typename?: 'CreateAccount';
  response?: Maybe<Scalars['GenericScalar']>;
  user?: Maybe<UserType>;
};

export type CreateComment = {
  __typename?: 'CreateComment';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type CreateOrder = {
  __typename?: 'CreateOrder';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type DeleteCartItem = {
  __typename?: 'DeleteCartItem';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type DeleteComment = {
  __typename?: 'DeleteComment';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateAccount?: Maybe<ActivateAccount>;
  addToCart?: Maybe<AddToCart>;
  changeEmail?: Maybe<ChangeEmail>;
  changePassword?: Maybe<ChangePassword>;
  cleareCart?: Maybe<CleareCartItem>;
  createAccount?: Maybe<CreateAccount>;
  createComment?: Maybe<CreateComment>;
  createOrder?: Maybe<CreateOrder>;
  deleteCartitem?: Maybe<DeleteCartItem>;
  deleteComment?: Maybe<DeleteComment>;
  refreshToken?: Maybe<Refresh>;
  resetPassword?: Maybe<ResetPassword>;
  revokeToken?: Maybe<Revoke>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateAccount?: Maybe<UpdateAccount>;
  updateComment?: Maybe<UpdateComment>;
  updateProfile?: Maybe<UpdateProfile>;
  verifyEmail?: Maybe<VerifyEmail>;
  verifyPassword?: Maybe<VerifyPassword>;
  verifyToken?: Maybe<Verify>;
};


export type MutationActivateAccountArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationAddToCartArgs = {
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type MutationChangeEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationChangePasswordArgs = {
  newPassword?: InputMaybe<Scalars['String']>;
  oldPassword?: InputMaybe<Scalars['String']>;
};


export type MutationCreateAccountArgs = {
  input: AccountInput;
};


export type MutationCreateCommentArgs = {
  input: CommentInput;
  typename: Scalars['String'];
};


export type MutationCreateOrderArgs = {
  address?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteCartitemArgs = {
  rowId: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationRevokeTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']>;
};


export type MutationTokenAuthArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCommentArgs = {
  body?: InputMaybe<Scalars['String']>;
  commentId?: InputMaybe<Scalars['ID']>;
  rate?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateProfileArgs = {
  age?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
};


export type MutationVerifyEmailArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationVerifyPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type OrderItemType = {
  __typename?: 'OrderItemType';
  id: Scalars['ID'];
  order: OrderType;
  product?: Maybe<ProductType>;
};

export type OrderType = {
  __typename?: 'OrderType';
  address: Scalars['String'];
  authority?: Maybe<Scalars['String']>;
  create: Scalars['DateTime'];
  id: Scalars['ID'];
  items: Array<OrderItemType>;
  paid: Scalars['Boolean'];
  price: Scalars['Decimal'];
  user?: Maybe<CartType>;
};

export type ProductGalleryType = {
  __typename?: 'ProductGalleryType';
  id: Scalars['ID'];
  image: Scalars['String'];
  product: ProductType;
};

/** An enumeration. */
export enum ProductProductCaratChoices {
  /** 8 ayar */
  A_8 = 'A_8',
  /** 14 ayar */
  A_14 = 'A_14',
  /** 18 ayar */
  A_18 = 'A_18',
  /** 22 ayar */
  A_22 = 'A_22',
  /** 24 ayar */
  A_24 = 'A_24'
}

/** An enumeration. */
export enum ProductProductStatusChoices {
  /** draft */
  D = 'D',
  /** publish */
  P = 'P',
  /** return */
  R = 'R'
}

export type ProductType = {
  __typename?: 'ProductType';
  body: Scalars['String'];
  carat: ProductProductCaratChoices;
  category?: Maybe<CategoryType>;
  color: Array<ColorType>;
  comments?: Maybe<Array<Maybe<CommentType>>>;
  create: Scalars['DateTime'];
  galleries: Array<ProductGalleryType>;
  goldOrJewelry: Scalars['Boolean'];
  id: Scalars['ID'];
  iframe?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  isRateFixed: Scalars['Boolean'];
  length?: Maybe<Scalars['Decimal']>;
  numbersRating: Scalars['Float'];
  orderitemSet: Array<OrderItemType>;
  price?: Maybe<Scalars['String']>;
  providerDiamondPrice?: Maybe<Scalars['Decimal']>;
  providerGoldRate?: Maybe<Scalars['Decimal']>;
  rating: Scalars['Decimal'];
  saleNumber: Scalars['Int'];
  scopeAvrage: Scalars['Float'];
  similarObjects?: Maybe<Array<Maybe<SimilarObjectsUnion>>>;
  siteRate?: Maybe<Scalars['Decimal']>;
  size: Array<SizeType>;
  slug: Scalars['String'];
  specialOffer: Scalars['Boolean'];
  status: ProductProductStatusChoices;
  stoneSet: Array<StoneType>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
  update: Scalars['DateTime'];
  visit?: Maybe<Scalars['Int']>;
  weight: Scalars['Decimal'];
  width?: Maybe<Scalars['Decimal']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  user: CartType;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<UserType>;
  articleDetail?: Maybe<ArticleType>;
  articles?: Maybe<Array<Maybe<ArticleType>>>;
  carts?: Maybe<CartType>;
  categories?: Maybe<Array<Maybe<CategoryType>>>;
  orders?: Maybe<Array<Maybe<OrderType>>>;
  productDetail?: Maybe<ProductType>;
  products?: Maybe<Array<Maybe<ProductType>>>;
  searchAllApp?: Maybe<Array<Maybe<SearchUnion>>>;
};


export type QueryArticleDetailArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryArticlesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderRating?: InputMaybe<Scalars['Boolean']>;
  orderVisit?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryProductDetailArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  goldOrJewelry?: InputMaybe<Scalars['Boolean']>;
  orderPrice?: InputMaybe<Scalars['Boolean']>;
  orderRating?: InputMaybe<Scalars['Boolean']>;
  orderSaleNumber?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  specialOffer?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySearchAllAppArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type ResetPassword = {
  __typename?: 'ResetPassword';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type Revoke = {
  __typename?: 'Revoke';
  revoked: Scalars['Int'];
};

export type SearchUnion = ArticleType | ProductType;

export type SimilarObjectsUnion = ArticleType | SimilarProductType;

export type SimilarProductType = {
  __typename?: 'SimilarProductType';
  body: Scalars['String'];
  carat: ProductProductCaratChoices;
  category?: Maybe<CategoryType>;
  color: Array<ColorType>;
  create: Scalars['DateTime'];
  galleries: Array<ProductGalleryType>;
  goldOrJewelry: Scalars['Boolean'];
  id: Scalars['ID'];
  iframe?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  isRateFixed: Scalars['Boolean'];
  length?: Maybe<Scalars['Decimal']>;
  numbersRating: Scalars['Float'];
  orderitemSet: Array<OrderItemType>;
  price?: Maybe<Scalars['String']>;
  providerDiamondPrice?: Maybe<Scalars['Decimal']>;
  providerGoldRate?: Maybe<Scalars['Decimal']>;
  rating: Scalars['Decimal'];
  saleNumber: Scalars['Int'];
  scopeAvrage: Scalars['Float'];
  siteRate?: Maybe<Scalars['Decimal']>;
  size: Array<SizeType>;
  slug: Scalars['String'];
  specialOffer: Scalars['Boolean'];
  status: ProductProductStatusChoices;
  stoneSet: Array<StoneType>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
  update: Scalars['DateTime'];
  weight: Scalars['Decimal'];
  width?: Maybe<Scalars['Decimal']>;
};

export type SizeType = {
  __typename?: 'SizeType';
  id: Scalars['ID'];
  productSet: Array<ProductType>;
  size: Scalars['Int'];
};

export type StoneType = {
  __typename?: 'StoneType';
  clarity: Scalars['String'];
  color: Scalars['String'];
  cut: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  product?: Maybe<ProductType>;
  quantity: Scalars['Int'];
  size: Scalars['Decimal'];
};

export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  response?: Maybe<Scalars['GenericScalar']>;
  user?: Maybe<UserType>;
};

export type UpdateComment = {
  __typename?: 'UpdateComment';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type UpdateProfile = {
  __typename?: 'UpdateProfile';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type UserType = {
  __typename?: 'UserType';
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  orders: Array<OrderType>;
  profile?: Maybe<ProfileType>;
  userComments: Array<CommentType>;
  username: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type VerifyEmail = {
  __typename?: 'VerifyEmail';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type VerifyPassword = {
  __typename?: 'VerifyPassword';
  response?: Maybe<Scalars['GenericScalar']>;
};

export type CreateAccountMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount?: { __typename?: 'CreateAccount', response?: any | null, user?: { __typename?: 'UserType', username: string } | null } | null };

export type ActivateAccountMutationVariables = Exact<{
  email: Scalars['String'];
  token: Scalars['String'];
}>;


export type ActivateAccountMutation = { __typename?: 'Mutation', activateAccount?: { __typename?: 'ActivateAccount', response?: any | null } | null };

export type TokenAuthMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type TokenAuthMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', payload: any, refreshExpiresIn: number, token: string } | null };

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyTokenMutation = { __typename?: 'Mutation', verifyToken?: { __typename?: 'Verify', payload: any } | null };

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'Refresh', payload: any, refreshExpiresIn: number, token: string } | null };

export type UpdateAccountMutationVariables = Exact<{
  username: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
}>;


export type UpdateAccountMutation = { __typename?: 'Mutation', updateAccount?: { __typename?: 'UpdateAccount', response?: any | null, user?: { __typename?: 'UserType', firstName: string, name: string, lastName: string } | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: { __typename?: 'ChangePassword', response?: any | null } | null };

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'ResetPassword', response?: any | null } | null };

export type VerifyPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type VerifyPasswordMutation = { __typename?: 'Mutation', verifyPassword?: { __typename?: 'VerifyPassword', response?: any | null } | null };

export type ChangeEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ChangeEmailMutation = { __typename?: 'Mutation', changeEmail?: { __typename?: 'ChangeEmail', response?: any | null } | null };

export type VerifyEmailMutationVariables = Exact<{
  email: Scalars['String'];
  token: Scalars['String'];
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail?: { __typename?: 'VerifyEmail', response?: any | null } | null };

export type NavCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type NavCategoriesQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'CategoryType', id: string, name: string, slug: string, children: Array<{ __typename?: 'CategoryType', name: string, id: string, slug: string }> } | null> | null };


export const CreateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"response"}}]}}]}}]} as unknown as DocumentNode<CreateAccountMutation, CreateAccountMutationVariables>;
export const ActivateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"}}]}}]}}]} as unknown as DocumentNode<ActivateAccountMutation, ActivateAccountMutationVariables>;
export const TokenAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"tokenAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenAuth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"refreshExpiresIn"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<TokenAuthMutation, TokenAuthMutationVariables>;
export const VerifyTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}}]} as unknown as DocumentNode<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refreshToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"refreshExpiresIn"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const UpdateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"}}]}}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"}}]}}]}}]} as unknown as DocumentNode<VerifyPasswordMutation, VerifyPasswordMutationVariables>;
export const ChangeEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"}}]}}]}}]} as unknown as DocumentNode<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const VerifyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"}}]}}]}}]} as unknown as DocumentNode<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const NavCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"navCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<NavCategoriesQuery, NavCategoriesQueryVariables>;