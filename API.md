# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoAuthorizer <a name="CognitoAuthorizer" id="cdk-cognito-userpool.CognitoAuthorizer"></a>

#### Initializers <a name="Initializers" id="cdk-cognito-userpool.CognitoAuthorizer.Initializer"></a>

```typescript
import { CognitoAuthorizer } from 'cdk-cognito-userpool'

new CognitoAuthorizer(scope: Construct, id: string, props: CognitoAuthorizerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cognito-userpool.CognitoAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-cognito-userpool.CognitoAuthorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cognito-userpool.CognitoAuthorizer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-cognito-userpool.CognitoAuthorizerProps">CognitoAuthorizerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-cognito-userpool.CognitoAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-cognito-userpool.CognitoAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-cognito-userpool.CognitoAuthorizer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-cognito-userpool.CognitoAuthorizerProps">CognitoAuthorizerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cognito-userpool.CognitoAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-cognito-userpool.CognitoAuthorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cognito-userpool.CognitoAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-cognito-userpool.CognitoAuthorizer.isConstruct"></a>

```typescript
import { CognitoAuthorizer } from 'cdk-cognito-userpool'

CognitoAuthorizer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-cognito-userpool.CognitoAuthorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cognito-userpool.CognitoAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-cognito-userpool.CognitoAuthorizer.property.userPool">userPool</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-cognito-userpool.CognitoAuthorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="cdk-cognito-userpool.CognitoAuthorizer.property.userPool"></a>

```typescript
public readonly userPool: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### CognitoAuthorizerProps <a name="CognitoAuthorizerProps" id="cdk-cognito-userpool.CognitoAuthorizerProps"></a>

#### Initializer <a name="Initializer" id="cdk-cognito-userpool.CognitoAuthorizerProps.Initializer"></a>

```typescript
import { CognitoAuthorizerProps } from 'cdk-cognito-userpool'

const cognitoAuthorizerProps: CognitoAuthorizerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cognito-userpool.CognitoAuthorizerProps.property.userPoolClientName">userPoolClientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cognito-userpool.CognitoAuthorizerProps.property.userPoolName">userPoolName</a></code> | <code>string</code> | *No description.* |

---

##### `userPoolClientName`<sup>Required</sup> <a name="userPoolClientName" id="cdk-cognito-userpool.CognitoAuthorizerProps.property.userPoolClientName"></a>

```typescript
public readonly userPoolClientName: string;
```

- *Type:* string

---

##### `userPoolName`<sup>Required</sup> <a name="userPoolName" id="cdk-cognito-userpool.CognitoAuthorizerProps.property.userPoolName"></a>

```typescript
public readonly userPoolName: string;
```

- *Type:* string

---



