
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  phoneNumber: number | null
  email: string | null
  name: string
  image: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Item
 * 
 */
export type Item = {
  id: number
  name: string
  price: string
  image: string
  sellerId: number
  buyerId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Chat
 * 
 */
export type Chat = {
  id: number
  askerId: number
  answererId: number
  itemId: number
  createdAt: Date
  talkedAt: Date
}

/**
 * Model Message
 * 
 */
export type Message = {
  id: number
  chatId: number
  senderId: number
  receiverId: number
  content: string
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<GlobalReject>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<GlobalReject>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Item: 'Item',
    Chat: 'Chat',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    soldItems: number
    boughtItems: number
    askingChats: number
    answeringChats: number
    sendedMessages: number
    receivedMessages: number
  }

  export type UserCountOutputTypeSelect = {
    soldItems?: boolean
    boughtItems?: boolean
    askingChats?: boolean
    answeringChats?: boolean
    sendedMessages?: boolean
    receivedMessages?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ItemCountOutputType
   */


  export type ItemCountOutputType = {
    chats: number
  }

  export type ItemCountOutputTypeSelect = {
    chats?: boolean
  }

  export type ItemCountOutputTypeGetPayload<S extends boolean | null | undefined | ItemCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ItemCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ItemCountOutputTypeArgs)
    ? ItemCountOutputType 
    : S extends { select: any } & (ItemCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ItemCountOutputType ? ItemCountOutputType[P] : never
  } 
      : ItemCountOutputType




  // Custom InputTypes

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     * 
    **/
    select?: ItemCountOutputTypeSelect | null
  }



  /**
   * Count Type ChatCountOutputType
   */


  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect = {
    messages?: boolean
  }

  export type ChatCountOutputTypeGetPayload<S extends boolean | null | undefined | ChatCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ChatCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ChatCountOutputTypeArgs)
    ? ChatCountOutputType 
    : S extends { select: any } & (ChatCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ChatCountOutputType ? ChatCountOutputType[P] : never
  } 
      : ChatCountOutputType




  // Custom InputTypes

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     * 
    **/
    select?: ChatCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phoneNumber: number
    email: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    phoneNumber?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    phoneNumber?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    phoneNumber: number | null
    email: string | null
    name: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    phoneNumber?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    soldItems?: boolean | ItemFindManyArgs
    boughtItems?: boolean | ItemFindManyArgs
    askingChats?: boolean | ChatFindManyArgs
    answeringChats?: boolean | ChatFindManyArgs
    sendedMessages?: boolean | MessageFindManyArgs
    receivedMessages?: boolean | MessageFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    soldItems?: boolean | ItemFindManyArgs
    boughtItems?: boolean | ItemFindManyArgs
    askingChats?: boolean | ChatFindManyArgs
    answeringChats?: boolean | ChatFindManyArgs
    sendedMessages?: boolean | MessageFindManyArgs
    receivedMessages?: boolean | MessageFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'soldItems' ? Array < ItemGetPayload<S['include'][P]>>  :
        P extends 'boughtItems' ? Array < ItemGetPayload<S['include'][P]>>  :
        P extends 'askingChats' ? Array < ChatGetPayload<S['include'][P]>>  :
        P extends 'answeringChats' ? Array < ChatGetPayload<S['include'][P]>>  :
        P extends 'sendedMessages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends 'receivedMessages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'soldItems' ? Array < ItemGetPayload<S['select'][P]>>  :
        P extends 'boughtItems' ? Array < ItemGetPayload<S['select'][P]>>  :
        P extends 'askingChats' ? Array < ChatGetPayload<S['select'][P]>>  :
        P extends 'answeringChats' ? Array < ChatGetPayload<S['select'][P]>>  :
        P extends 'sendedMessages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends 'receivedMessages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    soldItems<T extends ItemFindManyArgs= {}>(args?: Subset<T, ItemFindManyArgs>): PrismaPromise<Array<ItemGetPayload<T>>| Null>;

    boughtItems<T extends ItemFindManyArgs= {}>(args?: Subset<T, ItemFindManyArgs>): PrismaPromise<Array<ItemGetPayload<T>>| Null>;

    askingChats<T extends ChatFindManyArgs= {}>(args?: Subset<T, ChatFindManyArgs>): PrismaPromise<Array<ChatGetPayload<T>>| Null>;

    answeringChats<T extends ChatFindManyArgs= {}>(args?: Subset<T, ChatFindManyArgs>): PrismaPromise<Array<ChatGetPayload<T>>| Null>;

    sendedMessages<T extends MessageFindManyArgs= {}>(args?: Subset<T, MessageFindManyArgs>): PrismaPromise<Array<MessageGetPayload<T>>| Null>;

    receivedMessages<T extends MessageFindManyArgs= {}>(args?: Subset<T, MessageFindManyArgs>): PrismaPromise<Array<MessageGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Item
   */


  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    sellerId: number | null
    buyerId: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    sellerId: number | null
    buyerId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: string | null
    image: string | null
    sellerId: number | null
    buyerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: string | null
    image: string | null
    sellerId: number | null
    buyerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    price: number
    image: number
    sellerId: number
    buyerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    sellerId?: true
    buyerId?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    sellerId?: true
    buyerId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    sellerId?: true
    buyerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    sellerId?: true
    buyerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    sellerId?: true
    buyerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs = {
    /**
     * Filter which Item to aggregate.
     * 
    **/
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs = {
    where?: ItemWhereInput
    orderBy?: Enumerable<ItemOrderByWithAggregationInput>
    by: Array<ItemScalarFieldEnum>
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }


  export type ItemGroupByOutputType = {
    id: number
    name: string
    price: string
    image: string
    sellerId: number
    buyerId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect = {
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    seller?: boolean | UserArgs
    sellerId?: boolean
    buyer?: boolean | UserArgs
    buyerId?: boolean
    chats?: boolean | ChatFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | ItemCountOutputTypeArgs
  }


  export type ItemInclude = {
    seller?: boolean | UserArgs
    buyer?: boolean | UserArgs
    chats?: boolean | ChatFindManyArgs
    _count?: boolean | ItemCountOutputTypeArgs
  } 

  export type ItemGetPayload<S extends boolean | null | undefined | ItemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Item :
    S extends undefined ? never :
    S extends { include: any } & (ItemArgs | ItemFindManyArgs)
    ? Item  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'seller' ? UserGetPayload<S['include'][P]> :
        P extends 'buyer' ? UserGetPayload<S['include'][P]> | null :
        P extends 'chats' ? Array < ChatGetPayload<S['include'][P]>>  :
        P extends '_count' ? ItemCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ItemArgs | ItemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'seller' ? UserGetPayload<S['select'][P]> :
        P extends 'buyer' ? UserGetPayload<S['select'][P]> | null :
        P extends 'chats' ? Array < ChatGetPayload<S['select'][P]>>  :
        P extends '_count' ? ItemCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Item ? Item[P] : never
  } 
      : Item


  type ItemCountArgs = Merge<
    Omit<ItemFindManyArgs, 'select' | 'include'> & {
      select?: ItemCountAggregateInputType | true
    }
  >

  export interface ItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Item'> extends True ? Prisma__ItemClient<ItemGetPayload<T>> : Prisma__ItemClient<ItemGetPayload<T> | null, null>

    /**
     * Find one Item that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ItemFindUniqueOrThrowArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Item'> extends True ? Prisma__ItemClient<ItemGetPayload<T>> : Prisma__ItemClient<ItemGetPayload<T> | null, null>

    /**
     * Find the first Item that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ItemFindFirstOrThrowArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemFindManyArgs>(
      args?: SelectSubset<T, ItemFindManyArgs>
    ): PrismaPromise<Array<ItemGetPayload<T>>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
    **/
    create<T extends ItemCreateArgs>(
      args: SelectSubset<T, ItemCreateArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Create many Items.
     *     @param {ItemCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const item = await prisma.item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemCreateManyArgs>(
      args?: SelectSubset<T, ItemCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
    **/
    delete<T extends ItemDeleteArgs>(
      args: SelectSubset<T, ItemDeleteArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemUpdateArgs>(
      args: SelectSubset<T, ItemUpdateArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemDeleteManyArgs>(
      args?: SelectSubset<T, ItemDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemUpdateManyArgs>(
      args: SelectSubset<T, ItemUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
    **/
    upsert<T extends ItemUpsertArgs>(
      args: SelectSubset<T, ItemUpsertArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ItemClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    seller<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    buyer<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    chats<T extends ChatFindManyArgs= {}>(args?: Subset<T, ChatFindManyArgs>): PrismaPromise<Array<ChatGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Item base type for findUnique actions
   */
  export type ItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * Filter, which Item to fetch.
     * 
    **/
    where: ItemWhereUniqueInput
  }

  /**
   * Item: findUnique
   */
  export interface ItemFindUniqueArgs extends ItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * Filter, which Item to fetch.
     * 
    **/
    where: ItemWhereUniqueInput
  }


  /**
   * Item base type for findFirst actions
   */
  export type ItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * Filter, which Item to fetch.
     * 
    **/
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     * 
    **/
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     * 
    **/
    distinct?: Enumerable<ItemScalarFieldEnum>
  }

  /**
   * Item: findFirst
   */
  export interface ItemFindFirstArgs extends ItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * Filter, which Item to fetch.
     * 
    **/
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     * 
    **/
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     * 
    **/
    distinct?: Enumerable<ItemScalarFieldEnum>
  }


  /**
   * Item findMany
   */
  export type ItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     * 
    **/
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ItemScalarFieldEnum>
  }


  /**
   * Item create
   */
  export type ItemCreateArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * The data needed to create a Item.
     * 
    **/
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }


  /**
   * Item createMany
   */
  export type ItemCreateManyArgs = {
    /**
     * The data used to create many Items.
     * 
    **/
    data: Enumerable<ItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Item update
   */
  export type ItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * The data needed to update a Item.
     * 
    **/
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     * 
    **/
    where: ItemWhereUniqueInput
  }


  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs = {
    /**
     * The data used to update Items.
     * 
    **/
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     * 
    **/
    where?: ItemWhereInput
  }


  /**
   * Item upsert
   */
  export type ItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * The filter to search for the Item to update in case it exists.
     * 
    **/
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     * 
    **/
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }


  /**
   * Item delete
   */
  export type ItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * Filter which Item to delete.
     * 
    **/
    where: ItemWhereUniqueInput
  }


  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs = {
    /**
     * Filter which Items to delete
     * 
    **/
    where?: ItemWhereInput
  }


  /**
   * Item without action
   */
  export type ItemArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
  }



  /**
   * Model Chat
   */


  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    askerId: number | null
    answererId: number | null
    itemId: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    askerId: number | null
    answererId: number | null
    itemId: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    askerId: number | null
    answererId: number | null
    itemId: number | null
    createdAt: Date | null
    talkedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    askerId: number | null
    answererId: number | null
    itemId: number | null
    createdAt: Date | null
    talkedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    askerId: number
    answererId: number
    itemId: number
    createdAt: number
    talkedAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    askerId?: true
    answererId?: true
    itemId?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    askerId?: true
    answererId?: true
    itemId?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    askerId?: true
    answererId?: true
    itemId?: true
    createdAt?: true
    talkedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    askerId?: true
    answererId?: true
    itemId?: true
    createdAt?: true
    talkedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    askerId?: true
    answererId?: true
    itemId?: true
    createdAt?: true
    talkedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs = {
    /**
     * Filter which Chat to aggregate.
     * 
    **/
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     * 
    **/
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs = {
    where?: ChatWhereInput
    orderBy?: Enumerable<ChatOrderByWithAggregationInput>
    by: Array<ChatScalarFieldEnum>
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }


  export type ChatGroupByOutputType = {
    id: number
    askerId: number
    answererId: number
    itemId: number
    createdAt: Date
    talkedAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect = {
    id?: boolean
    asker?: boolean | UserArgs
    askerId?: boolean
    answerer?: boolean | UserArgs
    answererId?: boolean
    item?: boolean | ItemArgs
    itemId?: boolean
    messages?: boolean | MessageFindManyArgs
    createdAt?: boolean
    talkedAt?: boolean
    _count?: boolean | ChatCountOutputTypeArgs
  }


  export type ChatInclude = {
    asker?: boolean | UserArgs
    answerer?: boolean | UserArgs
    item?: boolean | ItemArgs
    messages?: boolean | MessageFindManyArgs
    _count?: boolean | ChatCountOutputTypeArgs
  } 

  export type ChatGetPayload<S extends boolean | null | undefined | ChatArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Chat :
    S extends undefined ? never :
    S extends { include: any } & (ChatArgs | ChatFindManyArgs)
    ? Chat  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'asker' ? UserGetPayload<S['include'][P]> :
        P extends 'answerer' ? UserGetPayload<S['include'][P]> :
        P extends 'item' ? ItemGetPayload<S['include'][P]> :
        P extends 'messages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends '_count' ? ChatCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ChatArgs | ChatFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'asker' ? UserGetPayload<S['select'][P]> :
        P extends 'answerer' ? UserGetPayload<S['select'][P]> :
        P extends 'item' ? ItemGetPayload<S['select'][P]> :
        P extends 'messages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends '_count' ? ChatCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Chat ? Chat[P] : never
  } 
      : Chat


  type ChatCountArgs = Merge<
    Omit<ChatFindManyArgs, 'select' | 'include'> & {
      select?: ChatCountAggregateInputType | true
    }
  >

  export interface ChatDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChatFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Chat'> extends True ? Prisma__ChatClient<ChatGetPayload<T>> : Prisma__ChatClient<ChatGetPayload<T> | null, null>

    /**
     * Find one Chat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ChatFindUniqueOrThrowArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChatFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Chat'> extends True ? Prisma__ChatClient<ChatGetPayload<T>> : Prisma__ChatClient<ChatGetPayload<T> | null, null>

    /**
     * Find the first Chat that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChatFindFirstOrThrowArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatFindManyArgs>(
      args?: SelectSubset<T, ChatFindManyArgs>
    ): PrismaPromise<Array<ChatGetPayload<T>>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
    **/
    create<T extends ChatCreateArgs>(
      args: SelectSubset<T, ChatCreateArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Create many Chats.
     *     @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     *     @example
     *     // Create many Chats
     *     const chat = await prisma.chat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatCreateManyArgs>(
      args?: SelectSubset<T, ChatCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
    **/
    delete<T extends ChatDeleteArgs>(
      args: SelectSubset<T, ChatDeleteArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatUpdateArgs>(
      args: SelectSubset<T, ChatUpdateArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatDeleteManyArgs>(
      args?: SelectSubset<T, ChatDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatUpdateManyArgs>(
      args: SelectSubset<T, ChatUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
    **/
    upsert<T extends ChatUpsertArgs>(
      args: SelectSubset<T, ChatUpsertArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChatClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    asker<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    answerer<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    item<T extends ItemArgs= {}>(args?: Subset<T, ItemArgs>): Prisma__ItemClient<ItemGetPayload<T> | Null>;

    messages<T extends MessageFindManyArgs= {}>(args?: Subset<T, MessageFindManyArgs>): PrismaPromise<Array<MessageGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Chat base type for findUnique actions
   */
  export type ChatFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * Filter, which Chat to fetch.
     * 
    **/
    where: ChatWhereUniqueInput
  }

  /**
   * Chat: findUnique
   */
  export interface ChatFindUniqueArgs extends ChatFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * Filter, which Chat to fetch.
     * 
    **/
    where: ChatWhereUniqueInput
  }


  /**
   * Chat base type for findFirst actions
   */
  export type ChatFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * Filter, which Chat to fetch.
     * 
    **/
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     * 
    **/
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     * 
    **/
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     * 
    **/
    distinct?: Enumerable<ChatScalarFieldEnum>
  }

  /**
   * Chat: findFirst
   */
  export interface ChatFindFirstArgs extends ChatFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * Filter, which Chat to fetch.
     * 
    **/
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     * 
    **/
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     * 
    **/
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     * 
    **/
    distinct?: Enumerable<ChatScalarFieldEnum>
  }


  /**
   * Chat findMany
   */
  export type ChatFindManyArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * Filter, which Chats to fetch.
     * 
    **/
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     * 
    **/
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     * 
    **/
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ChatScalarFieldEnum>
  }


  /**
   * Chat create
   */
  export type ChatCreateArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * The data needed to create a Chat.
     * 
    **/
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }


  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs = {
    /**
     * The data used to create many Chats.
     * 
    **/
    data: Enumerable<ChatCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Chat update
   */
  export type ChatUpdateArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * The data needed to update a Chat.
     * 
    **/
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     * 
    **/
    where: ChatWhereUniqueInput
  }


  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs = {
    /**
     * The data used to update Chats.
     * 
    **/
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     * 
    **/
    where?: ChatWhereInput
  }


  /**
   * Chat upsert
   */
  export type ChatUpsertArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * The filter to search for the Chat to update in case it exists.
     * 
    **/
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     * 
    **/
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }


  /**
   * Chat delete
   */
  export type ChatDeleteArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * Filter which Chat to delete.
     * 
    **/
    where: ChatWhereUniqueInput
  }


  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs = {
    /**
     * Filter which Chats to delete
     * 
    **/
    where?: ChatWhereInput
  }


  /**
   * Chat without action
   */
  export type ChatArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
  }



  /**
   * Model Message
   */


  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    chatId: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    chatId: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    chatId: number | null
    senderId: number | null
    receiverId: number | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    chatId: number | null
    senderId: number | null
    receiverId: number | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatId: number
    senderId: number
    receiverId: number
    content: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    receiverId?: true
    content?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    receiverId?: true
    content?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    receiverId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs = {
    /**
     * Filter which Message to aggregate.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs = {
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithAggregationInput>
    by: Array<MessageScalarFieldEnum>
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }


  export type MessageGroupByOutputType = {
    id: number
    chatId: number
    senderId: number
    receiverId: number
    content: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect = {
    id?: boolean
    chat?: boolean | ChatArgs
    chatId?: boolean
    sender?: boolean | UserArgs
    senderId?: boolean
    receiver?: boolean | UserArgs
    receiverId?: boolean
    content?: boolean
    createdAt?: boolean
  }


  export type MessageInclude = {
    chat?: boolean | ChatArgs
    sender?: boolean | UserArgs
    receiver?: boolean | UserArgs
  } 

  export type MessageGetPayload<S extends boolean | null | undefined | MessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Message :
    S extends undefined ? never :
    S extends { include: any } & (MessageArgs | MessageFindManyArgs)
    ? Message  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'chat' ? ChatGetPayload<S['include'][P]> :
        P extends 'sender' ? UserGetPayload<S['include'][P]> :
        P extends 'receiver' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MessageArgs | MessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'chat' ? ChatGetPayload<S['select'][P]> :
        P extends 'sender' ? UserGetPayload<S['select'][P]> :
        P extends 'receiver' ? UserGetPayload<S['select'][P]> :  P extends keyof Message ? Message[P] : never
  } 
      : Message


  type MessageCountArgs = Merge<
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }
  >

  export interface MessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Message'> extends True ? Prisma__MessageClient<MessageGetPayload<T>> : Prisma__MessageClient<MessageGetPayload<T> | null, null>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Message'> extends True ? Prisma__MessageClient<MessageGetPayload<T>> : Prisma__MessageClient<MessageGetPayload<T> | null, null>

    /**
     * Find the first Message that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs>
    ): PrismaPromise<Array<MessageGetPayload<T>>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    chat<T extends ChatArgs= {}>(args?: Subset<T, ChatArgs>): Prisma__ChatClient<ChatGetPayload<T> | Null>;

    sender<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    receiver<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Message base type for findUnique actions
   */
  export type MessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where: MessageWhereUniqueInput
  }

  /**
   * Message: findUnique
   */
  export interface MessageFindUniqueArgs extends MessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where: MessageWhereUniqueInput
  }


  /**
   * Message base type for findFirst actions
   */
  export type MessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     * 
    **/
    distinct?: Enumerable<MessageScalarFieldEnum>
  }

  /**
   * Message: findFirst
   */
  export interface MessageFindFirstArgs extends MessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     * 
    **/
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Messages to fetch.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message create
   */
  export type MessageCreateArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The data needed to create a Message.
     * 
    **/
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs = {
    /**
     * The data used to create many Messages.
     * 
    **/
    data: Enumerable<MessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The data needed to update a Message.
     * 
    **/
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     * 
    **/
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs = {
    /**
     * The data used to update Messages.
     * 
    **/
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     * 
    **/
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The filter to search for the Message to update in case it exists.
     * 
    **/
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     * 
    **/
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter which Message to delete.
     * 
    **/
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs = {
    /**
     * Filter which Messages to delete
     * 
    **/
    where?: MessageWhereInput
  }


  /**
   * Message without action
   */
  export type MessageArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ChatScalarFieldEnum: {
    id: 'id',
    askerId: 'askerId',
    answererId: 'answererId',
    itemId: 'itemId',
    createdAt: 'createdAt',
    talkedAt: 'talkedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    image: 'image',
    sellerId: 'sellerId',
    buyerId: 'buyerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    senderId: 'senderId',
    receiverId: 'receiverId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    email: 'email',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    phoneNumber?: IntNullableFilter | number | null
    email?: StringNullableFilter | string | null
    name?: StringFilter | string
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    soldItems?: ItemListRelationFilter
    boughtItems?: ItemListRelationFilter
    askingChats?: ChatListRelationFilter
    answeringChats?: ChatListRelationFilter
    sendedMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    soldItems?: ItemOrderByRelationAggregateInput
    boughtItems?: ItemOrderByRelationAggregateInput
    askingChats?: ChatOrderByRelationAggregateInput
    answeringChats?: ChatOrderByRelationAggregateInput
    sendedMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    phoneNumber?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    phoneNumber?: IntNullableWithAggregatesFilter | number | null
    email?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ItemWhereInput = {
    AND?: Enumerable<ItemWhereInput>
    OR?: Enumerable<ItemWhereInput>
    NOT?: Enumerable<ItemWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    price?: StringFilter | string
    image?: StringFilter | string
    seller?: XOR<UserRelationFilter, UserWhereInput>
    sellerId?: IntFilter | number
    buyer?: XOR<UserRelationFilter, UserWhereInput> | null
    buyerId?: IntNullableFilter | number | null
    chats?: ChatListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    seller?: UserOrderByWithRelationInput
    sellerId?: SortOrder
    buyer?: UserOrderByWithRelationInput
    buyerId?: SortOrder
    chats?: ChatOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemWhereUniqueInput = {
    id?: number
  }

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<ItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ItemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    price?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    sellerId?: IntWithAggregatesFilter | number
    buyerId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ChatWhereInput = {
    AND?: Enumerable<ChatWhereInput>
    OR?: Enumerable<ChatWhereInput>
    NOT?: Enumerable<ChatWhereInput>
    id?: IntFilter | number
    asker?: XOR<UserRelationFilter, UserWhereInput>
    askerId?: IntFilter | number
    answerer?: XOR<UserRelationFilter, UserWhereInput>
    answererId?: IntFilter | number
    item?: XOR<ItemRelationFilter, ItemWhereInput>
    itemId?: IntFilter | number
    messages?: MessageListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    talkedAt?: DateTimeFilter | Date | string
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    asker?: UserOrderByWithRelationInput
    askerId?: SortOrder
    answerer?: UserOrderByWithRelationInput
    answererId?: SortOrder
    item?: ItemOrderByWithRelationInput
    itemId?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    createdAt?: SortOrder
    talkedAt?: SortOrder
  }

  export type ChatWhereUniqueInput = {
    id?: number
  }

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    askerId?: SortOrder
    answererId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    talkedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChatScalarWhereWithAggregatesInput>
    OR?: Enumerable<ChatScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ChatScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    askerId?: IntWithAggregatesFilter | number
    answererId?: IntWithAggregatesFilter | number
    itemId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    talkedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MessageWhereInput = {
    AND?: Enumerable<MessageWhereInput>
    OR?: Enumerable<MessageWhereInput>
    NOT?: Enumerable<MessageWhereInput>
    id?: IntFilter | number
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
    chatId?: IntFilter | number
    sender?: XOR<UserRelationFilter, UserWhereInput>
    senderId?: IntFilter | number
    receiver?: XOR<UserRelationFilter, UserWhereInput>
    receiverId?: IntFilter | number
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chat?: ChatOrderByWithRelationInput
    chatId?: SortOrder
    sender?: UserOrderByWithRelationInput
    senderId?: SortOrder
    receiver?: UserOrderByWithRelationInput
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageWhereUniqueInput = {
    id?: number
  }

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    chatId?: IntWithAggregatesFilter | number
    senderId?: IntWithAggregatesFilter | number
    receiverId?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemCreateNestedManyWithoutSellerInput
    boughtItems?: ItemCreateNestedManyWithoutBuyerInput
    askingChats?: ChatCreateNestedManyWithoutAskerInput
    answeringChats?: ChatCreateNestedManyWithoutAnswererInput
    sendedMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemUncheckedCreateNestedManyWithoutSellerInput
    boughtItems?: ItemUncheckedCreateNestedManyWithoutBuyerInput
    askingChats?: ChatUncheckedCreateNestedManyWithoutAskerInput
    answeringChats?: ChatUncheckedCreateNestedManyWithoutAnswererInput
    sendedMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUpdateManyWithoutSellerNestedInput
    boughtItems?: ItemUpdateManyWithoutBuyerNestedInput
    askingChats?: ChatUpdateManyWithoutAskerNestedInput
    answeringChats?: ChatUpdateManyWithoutAnswererNestedInput
    sendedMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUncheckedUpdateManyWithoutSellerNestedInput
    boughtItems?: ItemUncheckedUpdateManyWithoutBuyerNestedInput
    askingChats?: ChatUncheckedUpdateManyWithoutAskerNestedInput
    answeringChats?: ChatUncheckedUpdateManyWithoutAnswererNestedInput
    sendedMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    name: string
    price: string
    image: string
    seller: UserCreateNestedOneWithoutSoldItemsInput
    buyer?: UserCreateNestedOneWithoutBoughtItemsInput
    chats?: ChatCreateNestedManyWithoutItemInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
    price: string
    image: string
    sellerId: number
    buyerId?: number | null
    chats?: ChatUncheckedCreateNestedManyWithoutItemInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    seller?: UserUpdateOneRequiredWithoutSoldItemsNestedInput
    buyer?: UserUpdateOneWithoutBoughtItemsNestedInput
    chats?: ChatUpdateManyWithoutItemNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    chats?: ChatUncheckedUpdateManyWithoutItemNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
    price: string
    image: string
    sellerId: number
    buyerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    asker: UserCreateNestedOneWithoutAskingChatsInput
    answerer: UserCreateNestedOneWithoutAnsweringChatsInput
    item: ItemCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    askerId: number
    answererId: number
    itemId: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatUpdateInput = {
    asker?: UserUpdateOneRequiredWithoutAskingChatsNestedInput
    answerer?: UserUpdateOneRequiredWithoutAnsweringChatsNestedInput
    item?: ItemUpdateOneRequiredWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    askerId?: IntFieldUpdateOperationsInput | number
    answererId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManyInput = {
    id?: number
    askerId: number
    answererId: number
    itemId: number
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    askerId?: IntFieldUpdateOperationsInput | number
    answererId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutSendedMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    content: string
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    chatId: number
    senderId: number
    receiverId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSendedMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    chatId: number
    senderId: number
    receiverId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
  }

  export type ItemRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    askerId?: SortOrder
    answererId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    talkedAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
    askerId?: SortOrder
    answererId?: SortOrder
    itemId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    askerId?: SortOrder
    answererId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    talkedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    askerId?: SortOrder
    answererId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    talkedAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
    askerId?: SortOrder
    answererId?: SortOrder
    itemId?: SortOrder
  }

  export type ChatRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type ItemCreateNestedManyWithoutSellerInput = {
    create?: XOR<Enumerable<ItemCreateWithoutSellerInput>, Enumerable<ItemUncheckedCreateWithoutSellerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutSellerInput>
    createMany?: ItemCreateManySellerInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type ItemCreateNestedManyWithoutBuyerInput = {
    create?: XOR<Enumerable<ItemCreateWithoutBuyerInput>, Enumerable<ItemUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutBuyerInput>
    createMany?: ItemCreateManyBuyerInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type ChatCreateNestedManyWithoutAskerInput = {
    create?: XOR<Enumerable<ChatCreateWithoutAskerInput>, Enumerable<ChatUncheckedCreateWithoutAskerInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutAskerInput>
    createMany?: ChatCreateManyAskerInputEnvelope
    connect?: Enumerable<ChatWhereUniqueInput>
  }

  export type ChatCreateNestedManyWithoutAnswererInput = {
    create?: XOR<Enumerable<ChatCreateWithoutAnswererInput>, Enumerable<ChatUncheckedCreateWithoutAnswererInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutAnswererInput>
    createMany?: ChatCreateManyAnswererInputEnvelope
    connect?: Enumerable<ChatWhereUniqueInput>
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<Enumerable<MessageCreateWithoutReceiverInput>, Enumerable<MessageUncheckedCreateWithoutReceiverInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutReceiverInput>
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type ItemUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<Enumerable<ItemCreateWithoutSellerInput>, Enumerable<ItemUncheckedCreateWithoutSellerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutSellerInput>
    createMany?: ItemCreateManySellerInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type ItemUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<Enumerable<ItemCreateWithoutBuyerInput>, Enumerable<ItemUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutBuyerInput>
    createMany?: ItemCreateManyBuyerInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type ChatUncheckedCreateNestedManyWithoutAskerInput = {
    create?: XOR<Enumerable<ChatCreateWithoutAskerInput>, Enumerable<ChatUncheckedCreateWithoutAskerInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutAskerInput>
    createMany?: ChatCreateManyAskerInputEnvelope
    connect?: Enumerable<ChatWhereUniqueInput>
  }

  export type ChatUncheckedCreateNestedManyWithoutAnswererInput = {
    create?: XOR<Enumerable<ChatCreateWithoutAnswererInput>, Enumerable<ChatUncheckedCreateWithoutAnswererInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutAnswererInput>
    createMany?: ChatCreateManyAnswererInputEnvelope
    connect?: Enumerable<ChatWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<Enumerable<MessageCreateWithoutReceiverInput>, Enumerable<MessageUncheckedCreateWithoutReceiverInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutReceiverInput>
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ItemUpdateManyWithoutSellerNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutSellerInput>, Enumerable<ItemUncheckedCreateWithoutSellerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutSellerInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutSellerInput>
    createMany?: ItemCreateManySellerInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutSellerInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutSellerInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type ItemUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutBuyerInput>, Enumerable<ItemUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutBuyerInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutBuyerInput>
    createMany?: ItemCreateManyBuyerInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutBuyerInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutBuyerInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type ChatUpdateManyWithoutAskerNestedInput = {
    create?: XOR<Enumerable<ChatCreateWithoutAskerInput>, Enumerable<ChatUncheckedCreateWithoutAskerInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutAskerInput>
    upsert?: Enumerable<ChatUpsertWithWhereUniqueWithoutAskerInput>
    createMany?: ChatCreateManyAskerInputEnvelope
    set?: Enumerable<ChatWhereUniqueInput>
    disconnect?: Enumerable<ChatWhereUniqueInput>
    delete?: Enumerable<ChatWhereUniqueInput>
    connect?: Enumerable<ChatWhereUniqueInput>
    update?: Enumerable<ChatUpdateWithWhereUniqueWithoutAskerInput>
    updateMany?: Enumerable<ChatUpdateManyWithWhereWithoutAskerInput>
    deleteMany?: Enumerable<ChatScalarWhereInput>
  }

  export type ChatUpdateManyWithoutAnswererNestedInput = {
    create?: XOR<Enumerable<ChatCreateWithoutAnswererInput>, Enumerable<ChatUncheckedCreateWithoutAnswererInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutAnswererInput>
    upsert?: Enumerable<ChatUpsertWithWhereUniqueWithoutAnswererInput>
    createMany?: ChatCreateManyAnswererInputEnvelope
    set?: Enumerable<ChatWhereUniqueInput>
    disconnect?: Enumerable<ChatWhereUniqueInput>
    delete?: Enumerable<ChatWhereUniqueInput>
    connect?: Enumerable<ChatWhereUniqueInput>
    update?: Enumerable<ChatUpdateWithWhereUniqueWithoutAnswererInput>
    updateMany?: Enumerable<ChatUpdateManyWithWhereWithoutAnswererInput>
    deleteMany?: Enumerable<ChatScalarWhereInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutReceiverInput>, Enumerable<MessageUncheckedCreateWithoutReceiverInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutReceiverInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutReceiverInput>
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutReceiverInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutReceiverInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutSellerInput>, Enumerable<ItemUncheckedCreateWithoutSellerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutSellerInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutSellerInput>
    createMany?: ItemCreateManySellerInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutSellerInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutSellerInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type ItemUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutBuyerInput>, Enumerable<ItemUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutBuyerInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutBuyerInput>
    createMany?: ItemCreateManyBuyerInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutBuyerInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutBuyerInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type ChatUncheckedUpdateManyWithoutAskerNestedInput = {
    create?: XOR<Enumerable<ChatCreateWithoutAskerInput>, Enumerable<ChatUncheckedCreateWithoutAskerInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutAskerInput>
    upsert?: Enumerable<ChatUpsertWithWhereUniqueWithoutAskerInput>
    createMany?: ChatCreateManyAskerInputEnvelope
    set?: Enumerable<ChatWhereUniqueInput>
    disconnect?: Enumerable<ChatWhereUniqueInput>
    delete?: Enumerable<ChatWhereUniqueInput>
    connect?: Enumerable<ChatWhereUniqueInput>
    update?: Enumerable<ChatUpdateWithWhereUniqueWithoutAskerInput>
    updateMany?: Enumerable<ChatUpdateManyWithWhereWithoutAskerInput>
    deleteMany?: Enumerable<ChatScalarWhereInput>
  }

  export type ChatUncheckedUpdateManyWithoutAnswererNestedInput = {
    create?: XOR<Enumerable<ChatCreateWithoutAnswererInput>, Enumerable<ChatUncheckedCreateWithoutAnswererInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutAnswererInput>
    upsert?: Enumerable<ChatUpsertWithWhereUniqueWithoutAnswererInput>
    createMany?: ChatCreateManyAnswererInputEnvelope
    set?: Enumerable<ChatWhereUniqueInput>
    disconnect?: Enumerable<ChatWhereUniqueInput>
    delete?: Enumerable<ChatWhereUniqueInput>
    connect?: Enumerable<ChatWhereUniqueInput>
    update?: Enumerable<ChatUpdateWithWhereUniqueWithoutAnswererInput>
    updateMany?: Enumerable<ChatUpdateManyWithWhereWithoutAnswererInput>
    deleteMany?: Enumerable<ChatScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutReceiverInput>, Enumerable<MessageUncheckedCreateWithoutReceiverInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutReceiverInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutReceiverInput>
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutReceiverInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutReceiverInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSoldItemsInput = {
    create?: XOR<UserCreateWithoutSoldItemsInput, UserUncheckedCreateWithoutSoldItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoldItemsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBoughtItemsInput = {
    create?: XOR<UserCreateWithoutBoughtItemsInput, UserUncheckedCreateWithoutBoughtItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoughtItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedManyWithoutItemInput = {
    create?: XOR<Enumerable<ChatCreateWithoutItemInput>, Enumerable<ChatUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutItemInput>
    createMany?: ChatCreateManyItemInputEnvelope
    connect?: Enumerable<ChatWhereUniqueInput>
  }

  export type ChatUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<Enumerable<ChatCreateWithoutItemInput>, Enumerable<ChatUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutItemInput>
    createMany?: ChatCreateManyItemInputEnvelope
    connect?: Enumerable<ChatWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutSoldItemsNestedInput = {
    create?: XOR<UserCreateWithoutSoldItemsInput, UserUncheckedCreateWithoutSoldItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoldItemsInput
    upsert?: UserUpsertWithoutSoldItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSoldItemsInput, UserUncheckedUpdateWithoutSoldItemsInput>
  }

  export type UserUpdateOneWithoutBoughtItemsNestedInput = {
    create?: XOR<UserCreateWithoutBoughtItemsInput, UserUncheckedCreateWithoutBoughtItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoughtItemsInput
    upsert?: UserUpsertWithoutBoughtItemsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoughtItemsInput, UserUncheckedUpdateWithoutBoughtItemsInput>
  }

  export type ChatUpdateManyWithoutItemNestedInput = {
    create?: XOR<Enumerable<ChatCreateWithoutItemInput>, Enumerable<ChatUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutItemInput>
    upsert?: Enumerable<ChatUpsertWithWhereUniqueWithoutItemInput>
    createMany?: ChatCreateManyItemInputEnvelope
    set?: Enumerable<ChatWhereUniqueInput>
    disconnect?: Enumerable<ChatWhereUniqueInput>
    delete?: Enumerable<ChatWhereUniqueInput>
    connect?: Enumerable<ChatWhereUniqueInput>
    update?: Enumerable<ChatUpdateWithWhereUniqueWithoutItemInput>
    updateMany?: Enumerable<ChatUpdateManyWithWhereWithoutItemInput>
    deleteMany?: Enumerable<ChatScalarWhereInput>
  }

  export type ChatUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<Enumerable<ChatCreateWithoutItemInput>, Enumerable<ChatUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutItemInput>
    upsert?: Enumerable<ChatUpsertWithWhereUniqueWithoutItemInput>
    createMany?: ChatCreateManyItemInputEnvelope
    set?: Enumerable<ChatWhereUniqueInput>
    disconnect?: Enumerable<ChatWhereUniqueInput>
    delete?: Enumerable<ChatWhereUniqueInput>
    connect?: Enumerable<ChatWhereUniqueInput>
    update?: Enumerable<ChatUpdateWithWhereUniqueWithoutItemInput>
    updateMany?: Enumerable<ChatUpdateManyWithWhereWithoutItemInput>
    deleteMany?: Enumerable<ChatScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutAskingChatsInput = {
    create?: XOR<UserCreateWithoutAskingChatsInput, UserUncheckedCreateWithoutAskingChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAskingChatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnsweringChatsInput = {
    create?: XOR<UserCreateWithoutAnsweringChatsInput, UserUncheckedCreateWithoutAnsweringChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnsweringChatsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutChatsInput = {
    create?: XOR<ItemCreateWithoutChatsInput, ItemUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutChatsInput
    connect?: ItemWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutAskingChatsNestedInput = {
    create?: XOR<UserCreateWithoutAskingChatsInput, UserUncheckedCreateWithoutAskingChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAskingChatsInput
    upsert?: UserUpsertWithoutAskingChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAskingChatsInput, UserUncheckedUpdateWithoutAskingChatsInput>
  }

  export type UserUpdateOneRequiredWithoutAnsweringChatsNestedInput = {
    create?: XOR<UserCreateWithoutAnsweringChatsInput, UserUncheckedCreateWithoutAnsweringChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnsweringChatsInput
    upsert?: UserUpsertWithoutAnsweringChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAnsweringChatsInput, UserUncheckedUpdateWithoutAnsweringChatsInput>
  }

  export type ItemUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<ItemCreateWithoutChatsInput, ItemUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutChatsInput
    upsert?: ItemUpsertWithoutChatsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<ItemUpdateWithoutChatsInput, ItemUncheckedUpdateWithoutChatsInput>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutChatInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutChatInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutChatInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutChatInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSendedMessagesInput = {
    create?: XOR<UserCreateWithoutSendedMessagesInput, UserUncheckedCreateWithoutSendedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSendedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutSendedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSendedMessagesInput, UserUncheckedCreateWithoutSendedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSendedMessagesInput
    upsert?: UserUpsertWithoutSendedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSendedMessagesInput, UserUncheckedUpdateWithoutSendedMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ItemCreateWithoutSellerInput = {
    name: string
    price: string
    image: string
    buyer?: UserCreateNestedOneWithoutBoughtItemsInput
    chats?: ChatCreateNestedManyWithoutItemInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateWithoutSellerInput = {
    id?: number
    name: string
    price: string
    image: string
    buyerId?: number | null
    chats?: ChatUncheckedCreateNestedManyWithoutItemInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutSellerInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutSellerInput, ItemUncheckedCreateWithoutSellerInput>
  }

  export type ItemCreateManySellerInputEnvelope = {
    data: Enumerable<ItemCreateManySellerInput>
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutBuyerInput = {
    name: string
    price: string
    image: string
    seller: UserCreateNestedOneWithoutSoldItemsInput
    chats?: ChatCreateNestedManyWithoutItemInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateWithoutBuyerInput = {
    id?: number
    name: string
    price: string
    image: string
    sellerId: number
    chats?: ChatUncheckedCreateNestedManyWithoutItemInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutBuyerInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutBuyerInput, ItemUncheckedCreateWithoutBuyerInput>
  }

  export type ItemCreateManyBuyerInputEnvelope = {
    data: Enumerable<ItemCreateManyBuyerInput>
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutAskerInput = {
    answerer: UserCreateNestedOneWithoutAnsweringChatsInput
    item: ItemCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatUncheckedCreateWithoutAskerInput = {
    id?: number
    answererId: number
    itemId: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatCreateOrConnectWithoutAskerInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutAskerInput, ChatUncheckedCreateWithoutAskerInput>
  }

  export type ChatCreateManyAskerInputEnvelope = {
    data: Enumerable<ChatCreateManyAskerInput>
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutAnswererInput = {
    asker: UserCreateNestedOneWithoutAskingChatsInput
    item: ItemCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatUncheckedCreateWithoutAnswererInput = {
    id?: number
    askerId: number
    itemId: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatCreateOrConnectWithoutAnswererInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutAnswererInput, ChatUncheckedCreateWithoutAnswererInput>
  }

  export type ChatCreateManyAnswererInputEnvelope = {
    data: Enumerable<ChatCreateManyAnswererInput>
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    chat: ChatCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    content: string
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    chatId: number
    receiverId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: Enumerable<MessageCreateManySenderInput>
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutSendedMessagesInput
    content: string
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    chatId: number
    senderId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: Enumerable<MessageCreateManyReceiverInput>
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutSellerInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutSellerInput, ItemUncheckedUpdateWithoutSellerInput>
    create: XOR<ItemCreateWithoutSellerInput, ItemUncheckedCreateWithoutSellerInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutSellerInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutSellerInput, ItemUncheckedUpdateWithoutSellerInput>
  }

  export type ItemUpdateManyWithWhereWithoutSellerInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutSoldItemsInput>
  }

  export type ItemScalarWhereInput = {
    AND?: Enumerable<ItemScalarWhereInput>
    OR?: Enumerable<ItemScalarWhereInput>
    NOT?: Enumerable<ItemScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    price?: StringFilter | string
    image?: StringFilter | string
    sellerId?: IntFilter | number
    buyerId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ItemUpsertWithWhereUniqueWithoutBuyerInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutBuyerInput, ItemUncheckedUpdateWithoutBuyerInput>
    create: XOR<ItemCreateWithoutBuyerInput, ItemUncheckedCreateWithoutBuyerInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutBuyerInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutBuyerInput, ItemUncheckedUpdateWithoutBuyerInput>
  }

  export type ItemUpdateManyWithWhereWithoutBuyerInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutBoughtItemsInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutAskerInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutAskerInput, ChatUncheckedUpdateWithoutAskerInput>
    create: XOR<ChatCreateWithoutAskerInput, ChatUncheckedCreateWithoutAskerInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutAskerInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutAskerInput, ChatUncheckedUpdateWithoutAskerInput>
  }

  export type ChatUpdateManyWithWhereWithoutAskerInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutAskingChatsInput>
  }

  export type ChatScalarWhereInput = {
    AND?: Enumerable<ChatScalarWhereInput>
    OR?: Enumerable<ChatScalarWhereInput>
    NOT?: Enumerable<ChatScalarWhereInput>
    id?: IntFilter | number
    askerId?: IntFilter | number
    answererId?: IntFilter | number
    itemId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    talkedAt?: DateTimeFilter | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutAnswererInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutAnswererInput, ChatUncheckedUpdateWithoutAnswererInput>
    create: XOR<ChatCreateWithoutAnswererInput, ChatUncheckedCreateWithoutAnswererInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutAnswererInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutAnswererInput, ChatUncheckedUpdateWithoutAnswererInput>
  }

  export type ChatUpdateManyWithWhereWithoutAnswererInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutAnsweringChatsInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSendedMessagesInput>
  }

  export type MessageScalarWhereInput = {
    AND?: Enumerable<MessageScalarWhereInput>
    OR?: Enumerable<MessageScalarWhereInput>
    NOT?: Enumerable<MessageScalarWhereInput>
    id?: IntFilter | number
    chatId?: IntFilter | number
    senderId?: IntFilter | number
    receiverId?: IntFilter | number
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceivedMessagesInput>
  }

  export type UserCreateWithoutSoldItemsInput = {
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    boughtItems?: ItemCreateNestedManyWithoutBuyerInput
    askingChats?: ChatCreateNestedManyWithoutAskerInput
    answeringChats?: ChatCreateNestedManyWithoutAnswererInput
    sendedMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSoldItemsInput = {
    id?: number
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    boughtItems?: ItemUncheckedCreateNestedManyWithoutBuyerInput
    askingChats?: ChatUncheckedCreateNestedManyWithoutAskerInput
    answeringChats?: ChatUncheckedCreateNestedManyWithoutAnswererInput
    sendedMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSoldItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSoldItemsInput, UserUncheckedCreateWithoutSoldItemsInput>
  }

  export type UserCreateWithoutBoughtItemsInput = {
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemCreateNestedManyWithoutSellerInput
    askingChats?: ChatCreateNestedManyWithoutAskerInput
    answeringChats?: ChatCreateNestedManyWithoutAnswererInput
    sendedMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutBoughtItemsInput = {
    id?: number
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemUncheckedCreateNestedManyWithoutSellerInput
    askingChats?: ChatUncheckedCreateNestedManyWithoutAskerInput
    answeringChats?: ChatUncheckedCreateNestedManyWithoutAnswererInput
    sendedMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutBoughtItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoughtItemsInput, UserUncheckedCreateWithoutBoughtItemsInput>
  }

  export type ChatCreateWithoutItemInput = {
    asker: UserCreateNestedOneWithoutAskingChatsInput
    answerer: UserCreateNestedOneWithoutAnsweringChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatUncheckedCreateWithoutItemInput = {
    id?: number
    askerId: number
    answererId: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatCreateOrConnectWithoutItemInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutItemInput, ChatUncheckedCreateWithoutItemInput>
  }

  export type ChatCreateManyItemInputEnvelope = {
    data: Enumerable<ChatCreateManyItemInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSoldItemsInput = {
    update: XOR<UserUpdateWithoutSoldItemsInput, UserUncheckedUpdateWithoutSoldItemsInput>
    create: XOR<UserCreateWithoutSoldItemsInput, UserUncheckedCreateWithoutSoldItemsInput>
  }

  export type UserUpdateWithoutSoldItemsInput = {
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boughtItems?: ItemUpdateManyWithoutBuyerNestedInput
    askingChats?: ChatUpdateManyWithoutAskerNestedInput
    answeringChats?: ChatUpdateManyWithoutAnswererNestedInput
    sendedMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSoldItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boughtItems?: ItemUncheckedUpdateManyWithoutBuyerNestedInput
    askingChats?: ChatUncheckedUpdateManyWithoutAskerNestedInput
    answeringChats?: ChatUncheckedUpdateManyWithoutAnswererNestedInput
    sendedMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutBoughtItemsInput = {
    update: XOR<UserUpdateWithoutBoughtItemsInput, UserUncheckedUpdateWithoutBoughtItemsInput>
    create: XOR<UserCreateWithoutBoughtItemsInput, UserUncheckedCreateWithoutBoughtItemsInput>
  }

  export type UserUpdateWithoutBoughtItemsInput = {
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUpdateManyWithoutSellerNestedInput
    askingChats?: ChatUpdateManyWithoutAskerNestedInput
    answeringChats?: ChatUpdateManyWithoutAnswererNestedInput
    sendedMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutBoughtItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUncheckedUpdateManyWithoutSellerNestedInput
    askingChats?: ChatUncheckedUpdateManyWithoutAskerNestedInput
    answeringChats?: ChatUncheckedUpdateManyWithoutAnswererNestedInput
    sendedMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ChatUpsertWithWhereUniqueWithoutItemInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutItemInput, ChatUncheckedUpdateWithoutItemInput>
    create: XOR<ChatCreateWithoutItemInput, ChatUncheckedCreateWithoutItemInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutItemInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutItemInput, ChatUncheckedUpdateWithoutItemInput>
  }

  export type ChatUpdateManyWithWhereWithoutItemInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutChatsInput>
  }

  export type UserCreateWithoutAskingChatsInput = {
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemCreateNestedManyWithoutSellerInput
    boughtItems?: ItemCreateNestedManyWithoutBuyerInput
    answeringChats?: ChatCreateNestedManyWithoutAnswererInput
    sendedMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutAskingChatsInput = {
    id?: number
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemUncheckedCreateNestedManyWithoutSellerInput
    boughtItems?: ItemUncheckedCreateNestedManyWithoutBuyerInput
    answeringChats?: ChatUncheckedCreateNestedManyWithoutAnswererInput
    sendedMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutAskingChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAskingChatsInput, UserUncheckedCreateWithoutAskingChatsInput>
  }

  export type UserCreateWithoutAnsweringChatsInput = {
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemCreateNestedManyWithoutSellerInput
    boughtItems?: ItemCreateNestedManyWithoutBuyerInput
    askingChats?: ChatCreateNestedManyWithoutAskerInput
    sendedMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutAnsweringChatsInput = {
    id?: number
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemUncheckedCreateNestedManyWithoutSellerInput
    boughtItems?: ItemUncheckedCreateNestedManyWithoutBuyerInput
    askingChats?: ChatUncheckedCreateNestedManyWithoutAskerInput
    sendedMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutAnsweringChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnsweringChatsInput, UserUncheckedCreateWithoutAnsweringChatsInput>
  }

  export type ItemCreateWithoutChatsInput = {
    name: string
    price: string
    image: string
    seller: UserCreateNestedOneWithoutSoldItemsInput
    buyer?: UserCreateNestedOneWithoutBoughtItemsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateWithoutChatsInput = {
    id?: number
    name: string
    price: string
    image: string
    sellerId: number
    buyerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutChatsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutChatsInput, ItemUncheckedCreateWithoutChatsInput>
  }

  export type MessageCreateWithoutChatInput = {
    sender: UserCreateNestedOneWithoutSendedMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    content: string
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: number
    senderId: number
    receiverId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: Enumerable<MessageCreateManyChatInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAskingChatsInput = {
    update: XOR<UserUpdateWithoutAskingChatsInput, UserUncheckedUpdateWithoutAskingChatsInput>
    create: XOR<UserCreateWithoutAskingChatsInput, UserUncheckedCreateWithoutAskingChatsInput>
  }

  export type UserUpdateWithoutAskingChatsInput = {
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUpdateManyWithoutSellerNestedInput
    boughtItems?: ItemUpdateManyWithoutBuyerNestedInput
    answeringChats?: ChatUpdateManyWithoutAnswererNestedInput
    sendedMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutAskingChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUncheckedUpdateManyWithoutSellerNestedInput
    boughtItems?: ItemUncheckedUpdateManyWithoutBuyerNestedInput
    answeringChats?: ChatUncheckedUpdateManyWithoutAnswererNestedInput
    sendedMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutAnsweringChatsInput = {
    update: XOR<UserUpdateWithoutAnsweringChatsInput, UserUncheckedUpdateWithoutAnsweringChatsInput>
    create: XOR<UserCreateWithoutAnsweringChatsInput, UserUncheckedCreateWithoutAnsweringChatsInput>
  }

  export type UserUpdateWithoutAnsweringChatsInput = {
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUpdateManyWithoutSellerNestedInput
    boughtItems?: ItemUpdateManyWithoutBuyerNestedInput
    askingChats?: ChatUpdateManyWithoutAskerNestedInput
    sendedMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutAnsweringChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUncheckedUpdateManyWithoutSellerNestedInput
    boughtItems?: ItemUncheckedUpdateManyWithoutBuyerNestedInput
    askingChats?: ChatUncheckedUpdateManyWithoutAskerNestedInput
    sendedMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ItemUpsertWithoutChatsInput = {
    update: XOR<ItemUpdateWithoutChatsInput, ItemUncheckedUpdateWithoutChatsInput>
    create: XOR<ItemCreateWithoutChatsInput, ItemUncheckedCreateWithoutChatsInput>
  }

  export type ItemUpdateWithoutChatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    seller?: UserUpdateOneRequiredWithoutSoldItemsNestedInput
    buyer?: UserUpdateOneWithoutBoughtItemsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    asker: UserCreateNestedOneWithoutAskingChatsInput
    answerer: UserCreateNestedOneWithoutAnsweringChatsInput
    item: ItemCreateNestedOneWithoutChatsInput
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: number
    askerId: number
    answererId: number
    itemId: number
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutSendedMessagesInput = {
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemCreateNestedManyWithoutSellerInput
    boughtItems?: ItemCreateNestedManyWithoutBuyerInput
    askingChats?: ChatCreateNestedManyWithoutAskerInput
    answeringChats?: ChatCreateNestedManyWithoutAnswererInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSendedMessagesInput = {
    id?: number
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemUncheckedCreateNestedManyWithoutSellerInput
    boughtItems?: ItemUncheckedCreateNestedManyWithoutBuyerInput
    askingChats?: ChatUncheckedCreateNestedManyWithoutAskerInput
    answeringChats?: ChatUncheckedCreateNestedManyWithoutAnswererInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSendedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSendedMessagesInput, UserUncheckedCreateWithoutSendedMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemCreateNestedManyWithoutSellerInput
    boughtItems?: ItemCreateNestedManyWithoutBuyerInput
    askingChats?: ChatCreateNestedManyWithoutAskerInput
    answeringChats?: ChatCreateNestedManyWithoutAnswererInput
    sendedMessages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: number
    phoneNumber?: number | null
    email?: string | null
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldItems?: ItemUncheckedCreateNestedManyWithoutSellerInput
    boughtItems?: ItemUncheckedCreateNestedManyWithoutBuyerInput
    askingChats?: ChatUncheckedCreateNestedManyWithoutAskerInput
    answeringChats?: ChatUncheckedCreateNestedManyWithoutAnswererInput
    sendedMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    asker?: UserUpdateOneRequiredWithoutAskingChatsNestedInput
    answerer?: UserUpdateOneRequiredWithoutAnsweringChatsNestedInput
    item?: ItemUpdateOneRequiredWithoutChatsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    askerId?: IntFieldUpdateOperationsInput | number
    answererId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSendedMessagesInput = {
    update: XOR<UserUpdateWithoutSendedMessagesInput, UserUncheckedUpdateWithoutSendedMessagesInput>
    create: XOR<UserCreateWithoutSendedMessagesInput, UserUncheckedCreateWithoutSendedMessagesInput>
  }

  export type UserUpdateWithoutSendedMessagesInput = {
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUpdateManyWithoutSellerNestedInput
    boughtItems?: ItemUpdateManyWithoutBuyerNestedInput
    askingChats?: ChatUpdateManyWithoutAskerNestedInput
    answeringChats?: ChatUpdateManyWithoutAnswererNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSendedMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUncheckedUpdateManyWithoutSellerNestedInput
    boughtItems?: ItemUncheckedUpdateManyWithoutBuyerNestedInput
    askingChats?: ChatUncheckedUpdateManyWithoutAskerNestedInput
    answeringChats?: ChatUncheckedUpdateManyWithoutAnswererNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUpdateManyWithoutSellerNestedInput
    boughtItems?: ItemUpdateManyWithoutBuyerNestedInput
    askingChats?: ChatUpdateManyWithoutAskerNestedInput
    answeringChats?: ChatUpdateManyWithoutAnswererNestedInput
    sendedMessages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldItems?: ItemUncheckedUpdateManyWithoutSellerNestedInput
    boughtItems?: ItemUncheckedUpdateManyWithoutBuyerNestedInput
    askingChats?: ChatUncheckedUpdateManyWithoutAskerNestedInput
    answeringChats?: ChatUncheckedUpdateManyWithoutAnswererNestedInput
    sendedMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ItemCreateManySellerInput = {
    id?: number
    name: string
    price: string
    image: string
    buyerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateManyBuyerInput = {
    id?: number
    name: string
    price: string
    image: string
    sellerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateManyAskerInput = {
    id?: number
    answererId: number
    itemId: number
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatCreateManyAnswererInput = {
    id?: number
    askerId: number
    itemId: number
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: number
    chatId: number
    receiverId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: number
    chatId: number
    senderId: number
    content: string
    createdAt?: Date | string
  }

  export type ItemUpdateWithoutSellerInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    buyer?: UserUpdateOneWithoutBoughtItemsNestedInput
    chats?: ChatUpdateManyWithoutItemNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    chats?: ChatUncheckedUpdateManyWithoutItemNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyWithoutSoldItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpdateWithoutBuyerInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    seller?: UserUpdateOneRequiredWithoutSoldItemsNestedInput
    chats?: ChatUpdateManyWithoutItemNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sellerId?: IntFieldUpdateOperationsInput | number
    chats?: ChatUncheckedUpdateManyWithoutItemNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyWithoutBoughtItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sellerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutAskerInput = {
    answerer?: UserUpdateOneRequiredWithoutAnsweringChatsNestedInput
    item?: ItemUpdateOneRequiredWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateWithoutAskerInput = {
    id?: IntFieldUpdateOperationsInput | number
    answererId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutAskingChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    answererId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutAnswererInput = {
    asker?: UserUpdateOneRequiredWithoutAskingChatsNestedInput
    item?: ItemUpdateOneRequiredWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateWithoutAnswererInput = {
    id?: IntFieldUpdateOperationsInput | number
    askerId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutAnsweringChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    askerId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSendedMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSendedMessagesNestedInput
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceivedMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManyItemInput = {
    id?: number
    askerId: number
    answererId: number
    createdAt?: Date | string
    talkedAt: Date | string
  }

  export type ChatUpdateWithoutItemInput = {
    asker?: UserUpdateOneRequiredWithoutAskingChatsNestedInput
    answerer?: UserUpdateOneRequiredWithoutAnsweringChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    askerId?: IntFieldUpdateOperationsInput | number
    answererId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    askerId?: IntFieldUpdateOperationsInput | number
    answererId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: number
    senderId: number
    receiverId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    sender?: UserUpdateOneRequiredWithoutSendedMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}