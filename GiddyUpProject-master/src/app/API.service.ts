/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  id?: string | null;
  username: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  image?: string | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  image?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateDriverInput = {
  id?: string | null;
  username: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  image?: string | null;
};

export type UpdateDriverInput = {
  id: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  image?: string | null;
};

export type DeleteDriverInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  firstName?: ModelStringFilterInput | null;
  lastName?: ModelStringFilterInput | null;
  phoneNumber?: ModelStringFilterInput | null;
  address?: ModelStringFilterInput | null;
  image?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelDriverFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  firstName?: ModelStringFilterInput | null;
  lastName?: ModelStringFilterInput | null;
  phoneNumber?: ModelStringFilterInput | null;
  address?: ModelStringFilterInput | null;
  image?: ModelStringFilterInput | null;
  and?: Array<ModelDriverFilterInput | null> | null;
  or?: Array<ModelDriverFilterInput | null> | null;
  not?: ModelDriverFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type CreateDriverMutation = {
  __typename: "Driver";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type UpdateDriverMutation = {
  __typename: "Driver";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type DeleteDriverMutation = {
  __typename: "Driver";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    address: string | null;
    image: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetDriverQuery = {
  __typename: "Driver";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type ListDriversQuery = {
  __typename: "ModelDriverConnection";
  items: Array<{
    __typename: "Driver";
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    address: string | null;
    image: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type OnCreateDriverSubscription = {
  __typename: "Driver";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type OnUpdateDriverSubscription = {
  __typename: "Driver";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

export type OnDeleteDriverSubscription = {
  __typename: "Driver";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  address: string | null;
  image: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateDriver(input: CreateDriverInput): Promise<CreateDriverMutation> {
    const statement = `mutation CreateDriver($input: CreateDriverInput!) {
        createDriver(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDriverMutation>response.data.createDriver;
  }
  async UpdateDriver(input: UpdateDriverInput): Promise<UpdateDriverMutation> {
    const statement = `mutation UpdateDriver($input: UpdateDriverInput!) {
        updateDriver(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDriverMutation>response.data.updateDriver;
  }
  async DeleteDriver(input: DeleteDriverInput): Promise<DeleteDriverMutation> {
    const statement = `mutation DeleteDriver($input: DeleteDriverInput!) {
        deleteDriver(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDriverMutation>response.data.deleteDriver;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            firstName
            lastName
            phoneNumber
            address
            image
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetDriver(id: string): Promise<GetDriverQuery> {
    const statement = `query GetDriver($id: ID!) {
        getDriver(id: $id) {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDriverQuery>response.data.getDriver;
  }
  async ListDrivers(
    filter?: ModelDriverFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDriversQuery> {
    const statement = `query ListDrivers($filter: ModelDriverFilterInput, $limit: Int, $nextToken: String) {
        listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            firstName
            lastName
            phoneNumber
            address
            image
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDriversQuery>response.data.listDrivers;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateDriverListener: Observable<OnCreateDriverSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDriver {
        onCreateDriver {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`
    )
  ) as Observable<OnCreateDriverSubscription>;

  OnUpdateDriverListener: Observable<OnUpdateDriverSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDriver {
        onUpdateDriver {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`
    )
  ) as Observable<OnUpdateDriverSubscription>;

  OnDeleteDriverListener: Observable<OnDeleteDriverSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDriver {
        onDeleteDriver {
          __typename
          id
          username
          firstName
          lastName
          phoneNumber
          address
          image
        }
      }`
    )
  ) as Observable<OnDeleteDriverSubscription>;
}
