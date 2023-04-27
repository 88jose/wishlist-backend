export interface AppConfiguration {
  PORT: number | string;
}

export interface DatabaseConfiguration {
  uri?: string;
  url?: string;
}

export interface Configuration {
  app: AppConfiguration;
  db: DatabaseConfiguration;
}

export interface ConfigurationObject {
  [key: string]: Configuration;
}


export interface RequestBodyUser {
  name: string;
  // password: string;
  email: string;
}
export interface RequestUSerBody {
  body: RequestBodyUser;
}



export interface RequestBodyTasks {
  title: string;
  description: string;
}

export interface RequestTasksParams {
  userID: string;
  id: string;
}

export interface RequestTasksBody extends RequestBodyTasks, RequestTasksParams {
  body: RequestTasksBody,
  params: RequestTasksParams
}

