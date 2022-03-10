type Compute<T extends object> = { [P in keyof T]: T[P] }
