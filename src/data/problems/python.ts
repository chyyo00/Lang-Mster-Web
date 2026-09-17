import type { Problem } from '../types'

export const PYTHON_PROBLEMS: Problem[] = [
  // ── Easy ──────────────────────────────────────────────
  {
    id: 'python-easy-1',
    language: 'python',
    difficulty: 'easy',
    title: '두 수의 합',
    topic: '기본 문법 · 입출력',
    description:
      '`input()`으로 정수 두 개를 공백으로 구분해 입력받아 합을 출력하는 프로그램을 작성하세요.',
    starterCode: `# TODO: 두 정수를 입력받아 합을 출력하세요
`,
    hint: '`a, b = map(int, input().split())` 로 한 줄에서 두 정수를 읽을 수 있습니다.',
    solutionCode: `a, b = map(int, input().split())
print(a + b)
`,
  },
  {
    id: 'python-easy-2',
    language: 'python',
    difficulty: 'easy',
    title: '짝수 판별 함수',
    topic: '함수 · 조건문',
    description: '정수를 받아 짝수이면 `True`, 홀수이면 `False`를 반환하는 `is_even(n)` 함수를 작성하세요.',
    starterCode: `def is_even(n):
    # TODO: 구현
    pass

print(is_even(4), is_even(7))
`,
    hint: '나머지 연산자 `%`를 사용해 `n % 2 == 0`을 반환하세요.',
    solutionCode: `def is_even(n):
    return n % 2 == 0

print(is_even(4), is_even(7))
`,
  },
  {
    id: 'python-easy-3',
    language: 'python',
    difficulty: 'easy',
    title: '리스트 최댓값 찾기',
    topic: '리스트 · 반복문',
    description: '정수 리스트를 받아 최댓값을 반환하는 `find_max(nums)` 함수를 내장 `max()` 없이 작성하세요.',
    starterCode: `def find_max(nums):
    # TODO: max() 없이 구현
    pass

print(find_max([3, 7, 2, 9, 4]))
`,
    hint: '첫 원소를 후보로 두고 반복문으로 나머지 원소와 비교하세요.',
    solutionCode: `def find_max(nums):
    max_val = nums[0]
    for n in nums[1:]:
        if n > max_val:
            max_val = n
    return max_val

print(find_max([3, 7, 2, 9, 4]))
`,
  },

  // ── Medium ────────────────────────────────────────────
  {
    id: 'python-medium-1',
    language: 'python',
    difficulty: 'medium',
    title: 'Counter로 단어 빈도수 세기',
    topic: '표준 라이브러리 · collections',
    description:
      '문자열 리스트 `words`를 받아 각 단어의 등장 횟수를 담은 딕셔너리를 반환하는 `count_words(words)` 함수를 `collections.Counter`를 사용해 작성하세요.',
    starterCode: `from collections import Counter

def count_words(words):
    # TODO: Counter 사용
    pass

words = ["python", "java", "python", "cpp", "java", "python"]
print(dict(count_words(words)))
`,
    hint: '`Counter(words)`는 바로 각 원소의 등장 횟수를 담은 딕셔너리형 객체를 반환합니다.',
    solutionCode: `from collections import Counter

def count_words(words):
    return Counter(words)

words = ["python", "java", "python", "cpp", "java", "python"]
print(dict(count_words(words)))
`,
  },
  {
    id: 'python-medium-2',
    language: 'python',
    difficulty: 'medium',
    title: '데이터 클래스와 정렬',
    topic: 'dataclass · sorted',
    description:
      '`@dataclass`로 `Student(name, score)`를 정의하고, 학생 리스트를 점수 내림차순으로 정렬해 이름 리스트로 반환하는 `rank_students(students)` 함수를 작성하세요.',
    starterCode: `from dataclasses import dataclass

@dataclass
class Student:
    name: str
    score: int

def rank_students(students):
    # TODO: score 내림차순 정렬 후 이름 리스트 반환
    pass

students = [Student("Alice", 88), Student("Bob", 95), Student("Cara", 72)]
print(rank_students(students))
`,
    hint: '`sorted(students, key=lambda s: s.score, reverse=True)` 로 정렬한 뒤 리스트 컴프리헨션으로 이름만 추출하세요.',
    solutionCode: `from dataclasses import dataclass

@dataclass
class Student:
    name: str
    score: int

def rank_students(students):
    ranked = sorted(students, key=lambda s: s.score, reverse=True)
    return [s.name for s in ranked]

students = [Student("Alice", 88), Student("Bob", 95), Student("Cara", 72)]
print(rank_students(students))
`,
  },
  {
    id: 'python-medium-3',
    language: 'python',
    difficulty: 'medium',
    title: '제너레이터로 피보나치 시퀀스',
    topic: '제너레이터 · yield',
    description:
      '`yield`를 사용해 무한히 피보나치 수를 생성하는 제너레이터 `fibonacci()`를 작성하고, 처음 n개를 리스트로 반환하는 `first_n_fib(n)` 함수를 작성하세요.',
    starterCode: `def fibonacci():
    # TODO: yield로 무한 피보나치 제너레이터 구현
    pass

def first_n_fib(n):
    # TODO: fibonacci()에서 n개를 뽑아 리스트로 반환
    pass

print(first_n_fib(8))
`,
    hint: '`a, b = 0, 1`로 시작해 `while True: yield a; a, b = b, a + b` 형태로 구현하고, `itertools.islice` 또는 직접 반복으로 n개를 소비하세요.',
    solutionCode: `def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

def first_n_fib(n):
    gen = fibonacci()
    return [next(gen) for _ in range(n)]

print(first_n_fib(8))
`,
  },

  // ── Hard ──────────────────────────────────────────────
  {
    id: 'python-hard-1',
    language: 'python',
    difficulty: 'hard',
    title: '데코레이터로 함수 실행 시간 측정',
    topic: '데코레이터 · functools',
    description:
      '임의의 함수를 감싸 실행 시간을 출력하고 원래 함수의 이름과 docstring을 보존하는 데코레이터 `timeit`을 `functools.wraps`를 사용해 작성하세요.',
    starterCode: `import time
import functools

def timeit(func):
    # TODO: 실행 시간을 출력하는 데코레이터 구현 (functools.wraps 사용)
    pass

@timeit
def slow_add(a, b):
    """두 수를 더합니다."""
    time.sleep(0.01)
    return a + b

print(slow_add(2, 3))
print(slow_add.__name__, slow_add.__doc__)
`,
    hint: '`@functools.wraps(func)`를 내부 wrapper 함수에 붙여야 `__name__`, `__doc__`가 보존됩니다. `time.perf_counter()`로 시간을 측정하세요.',
    solutionCode: `import time
import functools

def timeit(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timeit
def slow_add(a, b):
    """두 수를 더합니다."""
    time.sleep(0.01)
    return a + b

print(slow_add(2, 3))
print(slow_add.__name__, slow_add.__doc__)
`,
  },
  {
    id: 'python-hard-2',
    language: 'python',
    difficulty: 'hard',
    title: '이진 탐색 트리 클래스',
    topic: '자료구조 · 재귀',
    description:
      '`insert(value)`와 중위 순회 결과를 리스트로 반환하는 `inorder()` 메서드를 갖는 `BST` 클래스를 구현하세요.',
    starterCode: `class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        # TODO: 구현
        pass

    def inorder(self):
        result = []
        # TODO: 중위 순회로 result 채우기
        return result

tree = BST()
for v in [5, 3, 8, 1, 4, 7, 9]:
    tree.insert(v)
print(tree.inorder())
`,
    hint: '재귀 헬퍼 `_insert(node, value)`와 `_inorder(node, result)`를 만들어 `self.root`부터 시작하세요.',
    solutionCode: `class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        self.root = self._insert(self.root, value)

    def _insert(self, node, value):
        if node is None:
            return Node(value)
        if value < node.value:
            node.left = self._insert(node.left, value)
        else:
            node.right = self._insert(node.right, value)
        return node

    def inorder(self):
        result = []
        self._inorder(self.root, result)
        return result

    def _inorder(self, node, result):
        if node is None:
            return
        self._inorder(node.left, result)
        result.append(node.value)
        self._inorder(node.right, result)

tree = BST()
for v in [5, 3, 8, 1, 4, 7, 9]:
    tree.insert(v)
print(tree.inorder())
`,
  },
  {
    id: 'python-hard-3',
    language: 'python',
    difficulty: 'hard',
    title: 'asyncio로 동시 작업 실행',
    topic: '비동기 프로그래밍 · asyncio',
    description:
      '여러 개의 비동기 "다운로드" 작업(각각 `asyncio.sleep`으로 지연 흉내)을 `asyncio.gather`로 동시에 실행하고 결과를 모아 반환하는 `fetch_all(urls)` 코루틴을 작성하세요.',
    starterCode: `import asyncio

async def fetch(url):
    await asyncio.sleep(0.05)
    return f"data from {url}"

async def fetch_all(urls):
    # TODO: asyncio.gather로 fetch(url)들을 동시에 실행하고 결과 리스트 반환
    pass

async def main():
    urls = ["a.com", "b.com", "c.com"]
    results = await fetch_all(urls)
    print(results)

asyncio.run(main())
`,
    hint: '`await asyncio.gather(*(fetch(u) for u in urls))` 형태로 모든 코루틴을 동시에 실행하세요.',
    solutionCode: `import asyncio

async def fetch(url):
    await asyncio.sleep(0.05)
    return f"data from {url}"

async def fetch_all(urls):
    return await asyncio.gather(*(fetch(u) for u in urls))

async def main():
    urls = ["a.com", "b.com", "c.com"]
    results = await fetch_all(urls)
    print(results)

asyncio.run(main())
`,
  },

  // ── Expert ────────────────────────────────────────────
  {
    id: 'python-expert-1',
    language: 'python',
    difficulty: 'expert',
    title: '메타클래스로 싱글턴 패턴 구현',
    topic: '메타클래스 · 디자인 패턴',
    description:
      '메타클래스 `SingletonMeta`를 작성해, 이를 사용하는 모든 클래스가 인스턴스를 단 하나만 생성하도록 만드세요.',
    starterCode: `class SingletonMeta(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        # TODO: cls가 이미 인스턴스화되었으면 기존 인스턴스 반환, 아니면 새로 생성
        pass

class Database(metaclass=SingletonMeta):
    def __init__(self):
        self.connection = "connected"

db1 = Database()
db2 = Database()
print(db1 is db2)
`,
    hint: '`_instances` 딕셔너리에 `cls`를 키로 인스턴스를 캐싱하고, 없을 때만 `super().__call__(*args, **kwargs)`로 새로 생성하세요.',
    solutionCode: `class SingletonMeta(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    def __init__(self):
        self.connection = "connected"

db1 = Database()
db2 = Database()
print(db1 is db2)
`,
  },
  {
    id: 'python-expert-2',
    language: 'python',
    difficulty: 'expert',
    title: '컨텍스트 매니저 프로토콜 직접 구현',
    topic: '컨텍스트 매니저 · __enter__/__exit__',
    description:
      '`__enter__`와 `__exit__`를 직접 구현해, 블록 내에서 예외가 발생해도 항상 "리소스 해제" 로그를 남기고 예외 정보를 반환하는 `ManagedResource` 클래스를 작성하세요.',
    starterCode: `class ManagedResource:
    def __enter__(self):
        # TODO: 리소스 획득 로그 출력 후 self 반환
        pass

    def __exit__(self, exc_type, exc_value, traceback):
        # TODO: 리소스 해제 로그 출력. 예외를 삼키지 말고 그대로 전파(False 반환)
        pass

try:
    with ManagedResource() as res:
        print("작업 수행")
        raise ValueError("문제 발생")
except ValueError as e:
    print(f"예외 잡힘: {e}")
`,
    hint: '`__exit__`는 `exc_type`이 `None`이 아니면 예외가 발생했다는 뜻입니다. `False`(또는 falsy)를 반환하면 예외가 그대로 전파됩니다.',
    solutionCode: `class ManagedResource:
    def __enter__(self):
        print("리소스 획득")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("리소스 해제")
        if exc_type is not None:
            print(f"exit 중 감지된 예외: {exc_type.__name__}")
        return False

try:
    with ManagedResource() as res:
        print("작업 수행")
        raise ValueError("문제 발생")
except ValueError as e:
    print(f"예외 잡힘: {e}")
`,
  },
  {
    id: 'python-expert-3',
    language: 'python',
    difficulty: 'expert',
    title: '디스크립터로 타입 검증 속성 만들기',
    topic: '디스크립터 프로토콜',
    description:
      '`__set_name__`, `__get__`, `__set__`을 구현한 디스크립터 `TypedProperty`를 작성해, 클래스 속성에 지정된 타입이 아닌 값이 할당되면 `TypeError`를 발생시키도록 만드세요.',
    starterCode: `class TypedProperty:
    def __init__(self, expected_type):
        self.expected_type = expected_type

    def __set_name__(self, owner, name):
        self.name = "_" + name

    def __get__(self, instance, owner):
        # TODO: instance가 None이면 self 반환, 아니면 저장된 값 반환
        pass

    def __set__(self, instance, value):
        # TODO: 타입 검사 후 저장, 타입이 다르면 TypeError
        pass

class Point:
    x = TypedProperty(int)
    y = TypedProperty(int)

    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
print(p.x, p.y)
try:
    p.x = "oops"
except TypeError as e:
    print(f"TypeError: {e}")
`,
    hint: '`__get__`은 `instance is None`일 때 디스크립터 객체 자신을 반환하는 관례를 따르고, `__set__`에서는 `isinstance(value, self.expected_type)`로 검사한 뒤 `setattr(instance, self.name, value)`로 저장하세요.',
    solutionCode: `class TypedProperty:
    def __init__(self, expected_type):
        self.expected_type = expected_type

    def __set_name__(self, owner, name):
        self.name = "_" + name

    def __get__(self, instance, owner):
        if instance is None:
            return self
        return getattr(instance, self.name)

    def __set__(self, instance, value):
        if not isinstance(value, self.expected_type):
            raise TypeError(
                f"expected {self.expected_type.__name__}, got {type(value).__name__}"
            )
        setattr(instance, self.name, value)

class Point:
    x = TypedProperty(int)
    y = TypedProperty(int)

    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
print(p.x, p.y)
try:
    p.x = "oops"
except TypeError as e:
    print(f"TypeError: {e}")
`,
  },
]
