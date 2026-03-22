# sortism

![license](https://img.shields.io/npm/l/sortism)
![stars](https://img.shields.io/github/stars/Pro203S/sortism)

Sort arrays in the way that suits you best!  
This module provides various sorting methods.  
Just choose the one that fits your needs.

## Usage

1. Install the package

``` sh
npm i sortism

bun i sortism
```

2. Import the module

``` typescript
import sortism from 'sortism';
```

3. Use sorting

``` typescript
const arr = [5, 2, 3, 1, 4];

// Bubble sort, ascending
// 1,2,3,4,5
sortism(arr).bubble("ascending");

// Selection sort, descending
// 5,4,3,2,1
sortism(arr).selection("descending");
```

## Detailed Usage

-  Sorting objects

```typescript
const arr = [
    {
        "index": 2
    },
    {
        "index": 0
    },
    {
        "index": 2
    },
    {
        "index": 6
    },
    {
        "index": 4
    },
    {
        "index": 3
    }
];

// Bubble sort, ascending
sortism(arr).bubble("ascending");

/*
returns:
[
  {
    index: 0,
  }, {
    index: 2,
  }, {
    index: 2,
  }, {
    index: 3,
  }, {
    index: 4,
  }, {
    index: 6,
  }
]
*/
```

Install it now and start using it!
