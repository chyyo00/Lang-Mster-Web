import type { Problem } from '../types'

export const CPP_PROBLEMS: Problem[] = [
  // ── Easy ──────────────────────────────────────────────
  {
    id: 'cpp-easy-1',
    language: 'cpp',
    difficulty: 'easy',
    title: '두 수의 합',
    topic: '기본 문법 · 입출력',
    description:
      '표준 입력으로 정수 두 개를 받아 그 합을 출력하는 프로그램을 작성하세요. `cin`과 `cout`을 사용합니다.',
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    // TODO: a, b를 입력받아 합을 출력하세요
    return 0;
}
`,
    hint: '`cin >> a >> b;` 로 두 값을 한 번에 입력받을 수 있습니다.',
    solutionCode: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}
`,
  },
  {
    id: 'cpp-easy-2',
    language: 'cpp',
    difficulty: 'easy',
    title: '짝수 판별 함수',
    topic: '함수 · 조건문',
    description:
      '정수를 인자로 받아 짝수이면 true, 홀수이면 false를 반환하는 `bool isEven(int n)` 함수를 작성하세요.',
    starterCode: `#include <iostream>
using namespace std;

bool isEven(int n) {
    // TODO: 구현
}

int main() {
    cout << boolalpha << isEven(4) << " " << isEven(7) << endl;
    return 0;
}
`,
    hint: '나머지 연산자 `%`를 사용해 2로 나눈 나머지가 0인지 확인하세요.',
    solutionCode: `#include <iostream>
using namespace std;

bool isEven(int n) {
    return n % 2 == 0;
}

int main() {
    cout << boolalpha << isEven(4) << " " << isEven(7) << endl;
    return 0;
}
`,
  },
  {
    id: 'cpp-easy-3',
    language: 'cpp',
    difficulty: 'easy',
    title: '배열 최댓값 찾기',
    topic: '배열 · 반복문',
    description:
      '정수 배열 `arr`과 크기 `n`을 받아 최댓값을 반환하는 함수 `int findMax(int arr[], int n)`을 작성하세요.',
    starterCode: `#include <iostream>
using namespace std;

int findMax(int arr[], int n) {
    // TODO: 구현
}

int main() {
    int arr[] = {3, 7, 2, 9, 4};
    cout << findMax(arr, 5) << endl;
    return 0;
}
`,
    hint: '첫 원소를 최댓값 후보로 두고 반복문으로 나머지 원소와 비교하세요.',
    solutionCode: `#include <iostream>
using namespace std;

int findMax(int arr[], int n) {
    int maxVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxVal) maxVal = arr[i];
    }
    return maxVal;
}

int main() {
    int arr[] = {3, 7, 2, 9, 4};
    cout << findMax(arr, 5) << endl;
    return 0;
}
`,
  },

  // ── Medium ────────────────────────────────────────────
  {
    id: 'cpp-medium-1',
    language: 'cpp',
    difficulty: 'medium',
    title: '벡터로 단어 빈도수 세기',
    topic: 'STL · map',
    description:
      '문자열 벡터 `vector<string> words`를 받아 각 단어의 등장 횟수를 `map<string,int>`로 반환하는 함수를 작성하세요.',
    starterCode: `#include <iostream>
#include <vector>
#include <map>
#include <string>
using namespace std;

map<string,int> countWords(const vector<string>& words) {
    // TODO: 구현
}

int main() {
    vector<string> words = {"cpp", "java", "cpp", "python", "java", "cpp"};
    for (auto& [w, c] : countWords(words)) {
        cout << w << ": " << c << endl;
    }
    return 0;
}
`,
    hint: '`map<string,int>` 는 존재하지 않는 키에 접근하면 기본값 0으로 초기화됩니다.',
    solutionCode: `#include <iostream>
#include <vector>
#include <map>
#include <string>
using namespace std;

map<string,int> countWords(const vector<string>& words) {
    map<string,int> freq;
    for (const auto& w : words) freq[w]++;
    return freq;
}

int main() {
    vector<string> words = {"cpp", "java", "cpp", "python", "java", "cpp"};
    for (auto& [w, c] : countWords(words)) {
        cout << w << ": " << c << endl;
    }
    return 0;
}
`,
  },
  {
    id: 'cpp-medium-2',
    language: 'cpp',
    difficulty: 'medium',
    title: '구조체와 연산자 오버로딩',
    topic: '구조체 · 연산자 오버로딩',
    description:
      '`x`, `y` 멤버를 갖는 `Point` 구조체를 정의하고, `+` 연산자를 오버로딩하여 두 점의 좌표를 각각 더한 새 `Point`를 반환하도록 구현하세요.',
    starterCode: `#include <iostream>
using namespace std;

struct Point {
    int x, y;
    // TODO: operator+ 오버로딩
};

int main() {
    Point a{1, 2}, b{3, 4};
    Point c = a + b;
    cout << c.x << " " << c.y << endl;
    return 0;
}
`,
    hint: '`Point operator+(const Point& other) const { return {x + other.x, y + other.y}; }` 형태로 멤버 함수를 추가하세요.',
    solutionCode: `#include <iostream>
using namespace std;

struct Point {
    int x, y;
    Point operator+(const Point& other) const {
        return Point{x + other.x, y + other.y};
    }
};

int main() {
    Point a{1, 2}, b{3, 4};
    Point c = a + b;
    cout << c.x << " " << c.y << endl;
    return 0;
}
`,
  },
  {
    id: 'cpp-medium-3',
    language: 'cpp',
    difficulty: 'medium',
    title: '스마트 포인터로 리소스 관리',
    topic: '메모리 관리 · unique_ptr',
    description:
      '`unique_ptr<int[]>`를 사용해 크기 `n`의 정수 배열을 동적 할당하고 0부터 n-1까지 값을 채운 뒤 합을 반환하는 함수를 작성하세요. `new`/`delete`를 직접 사용하지 마세요.',
    starterCode: `#include <iostream>
#include <memory>
using namespace std;

int sumRange(int n) {
    // TODO: unique_ptr<int[]> 사용
}

int main() {
    cout << sumRange(5) << endl; // 0+1+2+3+4 = 10
    return 0;
}
`,
    hint: '`make_unique<int[]>(n)`으로 배열을 생성하면 스코프를 벗어날 때 자동으로 해제됩니다.',
    solutionCode: `#include <iostream>
#include <memory>
using namespace std;

int sumRange(int n) {
    auto arr = make_unique<int[]>(n);
    int sum = 0;
    for (int i = 0; i < n; i++) {
        arr[i] = i;
        sum += arr[i];
    }
    return sum;
}

int main() {
    cout << sumRange(5) << endl;
    return 0;
}
`,
  },

  // ── Hard ──────────────────────────────────────────────
  {
    id: 'cpp-hard-1',
    language: 'cpp',
    difficulty: 'hard',
    title: '템플릿 기반 제네릭 스택',
    topic: '템플릿 · 자료구조',
    description:
      '`push`, `pop`, `top`, `empty`를 지원하는 제네릭 `Stack<T>` 클래스를 템플릿으로 구현하세요. 내부적으로 `vector<T>`를 사용해도 됩니다.',
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

template <typename T>
class Stack {
    // TODO: 구현
};

int main() {
    Stack<int> s;
    s.push(1); s.push(2); s.push(3);
    while (!s.empty()) {
        cout << s.top() << " ";
        s.pop();
    }
    cout << endl;
    return 0;
}
`,
    hint: '`vector<T> data;` 를 멤버로 두고 `push_back`, `pop_back`, `back()`을 활용하세요.',
    solutionCode: `#include <iostream>
#include <vector>
#include <stdexcept>
using namespace std;

template <typename T>
class Stack {
private:
    vector<T> data;
public:
    void push(const T& val) { data.push_back(val); }
    void pop() {
        if (empty()) throw runtime_error("stack is empty");
        data.pop_back();
    }
    T& top() {
        if (empty()) throw runtime_error("stack is empty");
        return data.back();
    }
    bool empty() const { return data.empty(); }
};

int main() {
    Stack<int> s;
    s.push(1); s.push(2); s.push(3);
    while (!s.empty()) {
        cout << s.top() << " ";
        s.pop();
    }
    cout << endl;
    return 0;
}
`,
  },
  {
    id: 'cpp-hard-2',
    language: 'cpp',
    difficulty: 'hard',
    title: '이진 탐색 트리 삽입/순회',
    topic: '트리 · 재귀',
    description:
      '이진 탐색 트리(BST)에 값을 삽입하는 `insert` 함수와, 중위 순회 결과를 벡터로 반환하는 `inorder` 함수를 구현하세요.',
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

struct Node {
    int val;
    Node* left;
    Node* right;
    Node(int v) : val(v), left(nullptr), right(nullptr) {}
};

Node* insert(Node* root, int val) {
    // TODO: 구현
}

void inorder(Node* root, vector<int>& out) {
    // TODO: 구현
}

int main() {
    Node* root = nullptr;
    for (int v : {5, 3, 8, 1, 4, 7, 9}) root = insert(root, v);
    vector<int> result;
    inorder(root, result);
    for (int v : result) cout << v << " ";
    cout << endl;
    return 0;
}
`,
    hint: 'BST 삽입은 재귀적으로 값 비교 후 왼쪽/오른쪽 서브트리에 위임합니다. 중위 순회는 왼쪽 → 루트 → 오른쪽 순서입니다.',
    solutionCode: `#include <iostream>
#include <vector>
using namespace std;

struct Node {
    int val;
    Node* left;
    Node* right;
    Node(int v) : val(v), left(nullptr), right(nullptr) {}
};

Node* insert(Node* root, int val) {
    if (root == nullptr) return new Node(val);
    if (val < root->val) root->left = insert(root->left, val);
    else root->right = insert(root->right, val);
    return root;
}

void inorder(Node* root, vector<int>& out) {
    if (root == nullptr) return;
    inorder(root->left, out);
    out.push_back(root->val);
    inorder(root->right, out);
}

int main() {
    Node* root = nullptr;
    for (int v : {5, 3, 8, 1, 4, 7, 9}) root = insert(root, v);
    vector<int> result;
    inorder(root, result);
    for (int v : result) cout << v << " ";
    cout << endl;
    return 0;
}
`,
  },
  {
    id: 'cpp-hard-3',
    language: 'cpp',
    difficulty: 'hard',
    title: '멀티스레드 카운터',
    topic: '동시성 · mutex',
    description:
      '여러 스레드가 동시에 공유 카운터를 1씩 증가시키는 프로그램을 `mutex`로 안전하게 동기화하여 작성하세요. 스레드 4개가 각각 100000번 증가시킨 뒤 최종 값이 정확히 400000이어야 합니다.',
    starterCode: `#include <iostream>
#include <thread>
#include <mutex>
#include <vector>
using namespace std;

int counter = 0;
mutex mtx;

void increment(int times) {
    // TODO: mutex로 보호하며 counter 증가
}

int main() {
    vector<thread> threads;
    for (int i = 0; i < 4; i++) threads.emplace_back(increment, 100000);
    for (auto& t : threads) t.join();
    cout << counter << endl;
    return 0;
}
`,
    hint: '`lock_guard<mutex> lock(mtx);`를 반복문 안에서 사용해 임계 구역을 최소화하세요.',
    solutionCode: `#include <iostream>
#include <thread>
#include <mutex>
#include <vector>
using namespace std;

int counter = 0;
mutex mtx;

void increment(int times) {
    for (int i = 0; i < times; i++) {
        lock_guard<mutex> lock(mtx);
        counter++;
    }
}

int main() {
    vector<thread> threads;
    for (int i = 0; i < 4; i++) threads.emplace_back(increment, 100000);
    for (auto& t : threads) t.join();
    cout << counter << endl;
    return 0;
}
`,
  },

  // ── Expert ────────────────────────────────────────────
  {
    id: 'cpp-expert-1',
    language: 'cpp',
    difficulty: 'expert',
    title: 'SFINAE와 타입 트레이트',
    topic: '템플릿 메타프로그래밍',
    description:
      '컴파일 타임에 타입이 산술 타입(정수/실수)인지 여부에 따라 다른 동작을 하는 `describe` 함수를 `std::enable_if`와 `is_arithmetic`으로 구현하세요.',
    starterCode: `#include <iostream>
#include <type_traits>
#include <string>
using namespace std;

template <typename T>
// TODO: enable_if로 산술 타입 전용 오버로드
void describe(T value) {
    cout << "arithmetic: " << value << endl;
}

template <typename T>
// TODO: 산술 타입이 아닌 경우 오버로드
void describe(T value) {
    cout << "non-arithmetic" << endl;
}

int main() {
    describe(42);
    describe(string("hello"));
    return 0;
}
`,
    hint: '`enable_if_t<is_arithmetic_v<T>, int> = 0` 형태의 기본 템플릿 인자를 두 오버로드에 반대로 걸어 컴파일 타임에 선택되게 합니다.',
    solutionCode: `#include <iostream>
#include <type_traits>
#include <string>
using namespace std;

template <typename T, enable_if_t<is_arithmetic_v<T>, int> = 0>
void describe(T value) {
    cout << "arithmetic: " << value << endl;
}

template <typename T, enable_if_t<!is_arithmetic_v<T>, int> = 0>
void describe(T value) {
    cout << "non-arithmetic" << endl;
}

int main() {
    describe(42);
    describe(string("hello"));
    return 0;
}
`,
  },
  {
    id: 'cpp-expert-2',
    language: 'cpp',
    difficulty: 'expert',
    title: 'Rule of Five와 이동 의미론',
    topic: '리소스 관리 · move semantics',
    description:
      '동적 배열을 소유하는 `Buffer` 클래스에 대해 소멸자, 복사 생성자, 복사 대입 연산자, 이동 생성자, 이동 대입 연산자(Rule of Five)를 모두 올바르게 구현하세요.',
    starterCode: `#include <iostream>
#include <algorithm>
using namespace std;

class Buffer {
    int* data;
    size_t size;
public:
    Buffer(size_t n) : data(new int[n]()), size(n) {}
    // TODO: 소멸자
    // TODO: 복사 생성자
    // TODO: 복사 대입 연산자
    // TODO: 이동 생성자
    // TODO: 이동 대입 연산자
    size_t getSize() const { return size; }
};

int main() {
    Buffer a(10);
    Buffer b = a;            // 복사 생성
    Buffer c = move(a);      // 이동 생성
    cout << b.getSize() << " " << c.getSize() << endl;
    return 0;
}
`,
    hint: '이동 연산은 원본 포인터를 `nullptr`로 만들어 이중 해제를 방지해야 합니다. 복사 대입/이동 대입에서는 자기 대입(self-assignment)도 고려하세요.',
    solutionCode: `#include <iostream>
#include <algorithm>
using namespace std;

class Buffer {
    int* data;
    size_t size;
public:
    Buffer(size_t n) : data(new int[n]()), size(n) {}

    ~Buffer() { delete[] data; }

    Buffer(const Buffer& other) : data(new int[other.size]), size(other.size) {
        copy(other.data, other.data + size, data);
    }

    Buffer& operator=(const Buffer& other) {
        if (this == &other) return *this;
        int* newData = new int[other.size];
        copy(other.data, other.data + other.size, newData);
        delete[] data;
        data = newData;
        size = other.size;
        return *this;
    }

    Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) {
        other.data = nullptr;
        other.size = 0;
    }

    Buffer& operator=(Buffer&& other) noexcept {
        if (this == &other) return *this;
        delete[] data;
        data = other.data;
        size = other.size;
        other.data = nullptr;
        other.size = 0;
        return *this;
    }

    size_t getSize() const { return size; }
};

int main() {
    Buffer a(10);
    Buffer b = a;
    Buffer c = move(a);
    cout << b.getSize() << " " << c.getSize() << endl;
    return 0;
}
`,
  },
  {
    id: 'cpp-expert-3',
    language: 'cpp',
    difficulty: 'expert',
    title: '커스텀 할당자를 사용하는 메모리 풀',
    topic: '메모리 풀 · allocator',
    description:
      '고정 크기 블록을 재사용하는 간단한 메모리 풀 `PoolAllocator`를 구현하세요. `allocate()`는 빈 블록을 반환하고, `deallocate(ptr)`는 블록을 풀에 반환합니다.',
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

class PoolAllocator {
    vector<void*> freeList;
    vector<char*> blocks;
    size_t blockSize;
public:
    PoolAllocator(size_t blockSize, size_t count) : blockSize(blockSize) {
        // TODO: count개의 blockSize 크기 블록을 미리 할당하고 freeList에 등록
    }

    void* allocate() {
        // TODO: freeList에서 블록 하나를 꺼내 반환 (없으면 nullptr)
    }

    void deallocate(void* ptr) {
        // TODO: 블록을 freeList로 반환
    }

    ~PoolAllocator() {
        for (char* b : blocks) delete[] b;
    }
};

int main() {
    PoolAllocator pool(32, 4);
    void* p1 = pool.allocate();
    void* p2 = pool.allocate();
    cout << (p1 != nullptr) << " " << (p2 != nullptr) << (p1 != p2) << endl;
    pool.deallocate(p1);
    void* p3 = pool.allocate();
    cout << (p3 == p1) << endl;
    return 0;
}
`,
    hint: '생성자에서 `count`번 `new char[blockSize]`로 블록을 만들어 `blocks`와 `freeList`에 각각 등록하세요. `allocate`는 `freeList.back()`을 꺼내고 `pop_back()`, `deallocate`는 `freeList.push_back(ptr)`.',
    solutionCode: `#include <iostream>
#include <vector>
using namespace std;

class PoolAllocator {
    vector<void*> freeList;
    vector<char*> blocks;
    size_t blockSize;
public:
    PoolAllocator(size_t blockSize, size_t count) : blockSize(blockSize) {
        for (size_t i = 0; i < count; i++) {
            char* block = new char[blockSize];
            blocks.push_back(block);
            freeList.push_back(block);
        }
    }

    void* allocate() {
        if (freeList.empty()) return nullptr;
        void* ptr = freeList.back();
        freeList.pop_back();
        return ptr;
    }

    void deallocate(void* ptr) {
        freeList.push_back(ptr);
    }

    ~PoolAllocator() {
        for (char* b : blocks) delete[] b;
    }
};

int main() {
    PoolAllocator pool(32, 4);
    void* p1 = pool.allocate();
    void* p2 = pool.allocate();
    cout << (p1 != nullptr) << " " << (p2 != nullptr) << (p1 != p2) << endl;
    pool.deallocate(p1);
    void* p3 = pool.allocate();
    cout << (p3 == p1) << endl;
    return 0;
}
`,
  },
]
