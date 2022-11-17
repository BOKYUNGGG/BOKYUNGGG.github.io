# Hello

작성일시: 2022년 11월 9일 오전 2:38
주제: Notion Like Blog

# Head 1

---

- 가나다라마바사아자차카타파하
- 가나다라마바사아자차카타파하
- 가나다라마바사아자차카타파하

## Head 2

- 가나다라마바사아자차카타파하
- 가나다라마바사아자차카타파하
- 가나다라마바사아자차카타파하

### Head 3

- 가나다라마바사아자차카타파하
- 가나다라마바사아자차카타파하
- 가나다라마바사아자차카타파하

|  | column 1 | column 2 | column 3 |
| --- | --- | --- | --- |
| row 1 | data(1,1) | data(2,1) | data(3,1) |
| row 2 | data(1,2) | data(2,2) | data(3,2) |
| row 3 | data(1,3) | data(2,3) | data(3,3) |

### Javascript

```jsx
import './App.css';

function App() {
  return (
    <div>
      <header>header</header>
      <button>Click!</button>
    </div>
  );
}

export default App;
```

### python

```python
# 단어의 개수 입력
N = int(input())

# inputs = []
inputs = list()

# inputs = ["i", "sad", "it", "do", "for", "happy"]
for _ in range(N):
    inputs.append(input())

# answer = {}
answer = dict()

# answer = {
# 1 : set(), 
# 3 : set(), 
# 2 : set(),
# 5 : set()
# }
for element in inputs :
    answer[len(element)] = set()

# answer = { 
# 1 : {"i"},
# 3 : {"sad", "for"},
# 2 : {"it", "do"}, 
# 5 : {"happy"}
# }
for element in inputs :
    answer[len(element)].add(element)

# answer = [
# (1, {'i'}),
# (2, {"it", "do"}),
# (3, {"sad", "for"})
# (5, {"happy"})
# ]
answer = sorted(answer.items(), key= lambda item: item[0])

for i in answer :
    
    # tmp = ["it", "do"]
    tmp = list(i[1])

    # tmp = ["do", "it"]
    tmp.sort()
    for j in tmp:
        print(j)
```

### Go

```go
package accounts

// Account Struct
type Account struct {
	owner   string
	balance int
}

// NewAccount creates Account
func NewAccount(owner string) *Account {
	account := Account{owner: owner, balance: 0}
	return &account
}

// Deposit x amount on your account
func (a Account) Deposit(amount int) {
	a.balance += amount
}

// Balance of your account
func (a Account) Balance() int {
	return a.balance
}
```

![105.6](Hello%20dea6d2e3af8f4ccf8974a7f6d6dcf65e/Untitled.png)

105.6

![212](Hello%20dea6d2e3af8f4ccf8974a7f6d6dcf65e/Untitled%201.png)

212

![424](Hello%20dea6d2e3af8f4ccf8974a7f6d6dcf65e/Untitled%202.png)

424
