import type { Problem } from '../types'

export const JAVA_PROBLEMS: Problem[] = [
  // ── Easy ──────────────────────────────────────────────
  {
    id: 'java-easy-1',
    language: 'java',
    difficulty: 'easy',
    title: '두 수의 합',
    topic: '기본 문법 · 입출력',
    description:
      '`Scanner`로 정수 두 개를 입력받아 합을 출력하는 프로그램을 작성하세요.',
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // TODO: 두 정수를 입력받아 합을 출력하세요
    }
}
`,
    hint: '`sc.nextInt()`를 두 번 호출해 각각의 정수를 읽으세요.',
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a + b);
    }
}
`,
  },
  {
    id: 'java-easy-2',
    language: 'java',
    difficulty: 'easy',
    title: '짝수 판별 메서드',
    topic: '메서드 · 조건문',
    description:
      '정수를 인자로 받아 짝수이면 `true`, 홀수이면 `false`를 반환하는 정적 메서드 `isEven(int n)`을 작성하세요.',
    starterCode: `public class Main {
    static boolean isEven(int n) {
        // TODO: 구현
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isEven(4) + " " + isEven(7));
    }
}
`,
    hint: '나머지 연산자 `%`로 2로 나눈 나머지가 0인지 확인하세요.',
    solutionCode: `public class Main {
    static boolean isEven(int n) {
        return n % 2 == 0;
    }

    public static void main(String[] args) {
        System.out.println(isEven(4) + " " + isEven(7));
    }
}
`,
  },
  {
    id: 'java-easy-3',
    language: 'java',
    difficulty: 'easy',
    title: '배열 최댓값 찾기',
    topic: '배열 · 반복문',
    description:
      '정수 배열을 받아 최댓값을 반환하는 정적 메서드 `findMax(int[] arr)`를 작성하세요.',
    starterCode: `public class Main {
    static int findMax(int[] arr) {
        // TODO: 구현
        return 0;
    }

    public static void main(String[] args) {
        int[] arr = {3, 7, 2, 9, 4};
        System.out.println(findMax(arr));
    }
}
`,
    hint: '첫 원소를 최댓값 후보로 두고 for-each 루프로 나머지 원소와 비교하세요.',
    solutionCode: `public class Main {
    static int findMax(int[] arr) {
        int maxVal = arr[0];
        for (int v : arr) {
            if (v > maxVal) maxVal = v;
        }
        return maxVal;
    }

    public static void main(String[] args) {
        int[] arr = {3, 7, 2, 9, 4};
        System.out.println(findMax(arr));
    }
}
`,
  },

  // ── Medium ────────────────────────────────────────────
  {
    id: 'java-medium-1',
    language: 'java',
    difficulty: 'medium',
    title: 'HashMap으로 단어 빈도수 세기',
    topic: '컬렉션 · HashMap',
    description:
      '문자열 리스트 `List<String> words`를 받아 각 단어의 등장 횟수를 `Map<String, Integer>`로 반환하는 메서드를 작성하세요.',
    starterCode: `import java.util.*;

public class Main {
    static Map<String, Integer> countWords(List<String> words) {
        // TODO: 구현
        return null;
    }

    public static void main(String[] args) {
        List<String> words = Arrays.asList("java", "cpp", "java", "python", "cpp", "java");
        Map<String, Integer> result = countWords(words);
        for (var entry : result.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
`,
    hint: '`map.merge(word, 1, Integer::sum)` 또는 `getOrDefault`를 사용하면 간결하게 구현할 수 있습니다.',
    solutionCode: `import java.util.*;

public class Main {
    static Map<String, Integer> countWords(List<String> words) {
        Map<String, Integer> freq = new HashMap<>();
        for (String w : words) {
            freq.put(w, freq.getOrDefault(w, 0) + 1);
        }
        return freq;
    }

    public static void main(String[] args) {
        List<String> words = Arrays.asList("java", "cpp", "java", "python", "cpp", "java");
        Map<String, Integer> result = countWords(words);
        for (var entry : result.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
`,
  },
  {
    id: 'java-medium-2',
    language: 'java',
    difficulty: 'medium',
    title: '인터페이스와 다형성',
    topic: '객체지향 · interface',
    description:
      '`Shape` 인터페이스에 `double area()`를 선언하고, 이를 구현하는 `Circle`, `Rectangle` 클래스를 작성한 뒤 다형성을 이용해 도형 리스트의 전체 넓이 합을 계산하세요.',
    starterCode: `import java.util.*;

interface Shape {
    double area();
}

class Circle implements Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }
    // TODO: area 구현
}

class Rectangle implements Shape {
    double width, height;
    Rectangle(double width, double height) { this.width = width; this.height = height; }
    // TODO: area 구현
}

public class Main {
    public static void main(String[] args) {
        List<Shape> shapes = List.of(new Circle(2), new Rectangle(3, 4));
        double total = 0;
        for (Shape s : shapes) total += s.area();
        System.out.printf("%.2f%n", total);
    }
}
`,
    hint: '원의 넓이는 `Math.PI * radius * radius`, 사각형은 `width * height`입니다.',
    solutionCode: `import java.util.*;

interface Shape {
    double area();
}

class Circle implements Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }
    public double area() { return Math.PI * radius * radius; }
}

class Rectangle implements Shape {
    double width, height;
    Rectangle(double width, double height) { this.width = width; this.height = height; }
    public double area() { return width * height; }
}

public class Main {
    public static void main(String[] args) {
        List<Shape> shapes = List.of(new Circle(2), new Rectangle(3, 4));
        double total = 0;
        for (Shape s : shapes) total += s.area();
        System.out.printf("%.2f%n", total);
    }
}
`,
  },
  {
    id: 'java-medium-3',
    language: 'java',
    difficulty: 'medium',
    title: '예외 처리와 커스텀 예외',
    topic: '예외 · try-catch',
    description:
      '잔액이 부족할 때 던져지는 `InsufficientFundsException`을 정의하고, `withdraw(int amount)`에서 잔액보다 큰 금액을 인출하려 하면 이 예외를 던지도록 `Account` 클래스를 작성하세요.',
    starterCode: `public class Main {
    static class InsufficientFundsException extends Exception {
        InsufficientFundsException(String message) { super(message); }
    }

    static class Account {
        int balance;
        Account(int balance) { this.balance = balance; }
        void withdraw(int amount) throws InsufficientFundsException {
            // TODO: 잔액 부족 시 예외 발생, 아니면 차감
        }
    }

    public static void main(String[] args) {
        Account acc = new Account(100);
        try {
            acc.withdraw(150);
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
        }
        System.out.println(acc.balance);
    }
}
`,
    hint: '`if (amount > balance) throw new InsufficientFundsException("잔액 부족");` 형태로 조건을 검사하세요.',
    solutionCode: `public class Main {
    static class InsufficientFundsException extends Exception {
        InsufficientFundsException(String message) { super(message); }
    }

    static class Account {
        int balance;
        Account(int balance) { this.balance = balance; }
        void withdraw(int amount) throws InsufficientFundsException {
            if (amount > balance) {
                throw new InsufficientFundsException("잔액 부족");
            }
            balance -= amount;
        }
    }

    public static void main(String[] args) {
        Account acc = new Account(100);
        try {
            acc.withdraw(150);
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
        }
        System.out.println(acc.balance);
    }
}
`,
  },

  // ── Hard ──────────────────────────────────────────────
  {
    id: 'java-hard-1',
    language: 'java',
    difficulty: 'hard',
    title: '제네릭 이진 탐색 트리',
    topic: '제네릭 · 트리',
    description:
      '`Comparable<T>`를 구현한 타입 `T`에 대해 동작하는 제네릭 이진 탐색 트리 `BST<T>`를 구현하세요. `insert(T value)`와 중위 순회 결과를 반환하는 `inorder()`를 지원해야 합니다.',
    starterCode: `import java.util.*;

class BST<T extends Comparable<T>> {
    class Node {
        T value;
        Node left, right;
        Node(T value) { this.value = value; }
    }

    Node root;

    void insert(T value) {
        // TODO: 구현
    }

    List<T> inorder() {
        List<T> result = new ArrayList<>();
        // TODO: 중위 순회로 result 채우기
        return result;
    }
}

public class Main {
    public static void main(String[] args) {
        BST<Integer> tree = new BST<>();
        for (int v : new int[]{5, 3, 8, 1, 4, 7, 9}) tree.insert(v);
        System.out.println(tree.inorder());
    }
}
`,
    hint: '삽입은 재귀 헬퍼 메서드 `insertNode(Node node, T value)`를 만들어 `compareTo`로 좌우를 판단하세요.',
    solutionCode: `import java.util.*;

class BST<T extends Comparable<T>> {
    class Node {
        T value;
        Node left, right;
        Node(T value) { this.value = value; }
    }

    Node root;

    void insert(T value) {
        root = insertNode(root, value);
    }

    private Node insertNode(Node node, T value) {
        if (node == null) return new Node(value);
        if (value.compareTo(node.value) < 0) {
            node.left = insertNode(node.left, value);
        } else {
            node.right = insertNode(node.right, value);
        }
        return node;
    }

    List<T> inorder() {
        List<T> result = new ArrayList<>();
        inorderHelper(root, result);
        return result;
    }

    private void inorderHelper(Node node, List<T> result) {
        if (node == null) return;
        inorderHelper(node.left, result);
        result.add(node.value);
        inorderHelper(node.right, result);
    }
}

public class Main {
    public static void main(String[] args) {
        BST<Integer> tree = new BST<>();
        for (int v : new int[]{5, 3, 8, 1, 4, 7, 9}) tree.insert(v);
        System.out.println(tree.inorder());
    }
}
`,
  },
  {
    id: 'java-hard-2',
    language: 'java',
    difficulty: 'hard',
    title: '스트림으로 데이터 집계하기',
    topic: 'Stream API · 람다',
    description:
      '`record Employee(String name, String dept, int salary)` 리스트를 부서별로 그룹화하여 부서별 평균 연봉을 담은 `Map<String, Double>`을 Stream API로 계산하세요.',
    starterCode: `import java.util.*;
import java.util.stream.*;

public class Main {
    record Employee(String name, String dept, int salary) {}

    static Map<String, Double> avgSalaryByDept(List<Employee> employees) {
        // TODO: Stream + Collectors.groupingBy 사용
        return null;
    }

    public static void main(String[] args) {
        List<Employee> employees = List.of(
            new Employee("A", "Eng", 5000),
            new Employee("B", "Eng", 7000),
            new Employee("C", "Sales", 4000)
        );
        System.out.println(avgSalaryByDept(employees));
    }
}
`,
    hint: '`Collectors.groupingBy(Employee::dept, Collectors.averagingInt(Employee::salary))`를 사용하세요.',
    solutionCode: `import java.util.*;
import java.util.stream.*;

public class Main {
    record Employee(String name, String dept, int salary) {}

    static Map<String, Double> avgSalaryByDept(List<Employee> employees) {
        return employees.stream()
            .collect(Collectors.groupingBy(
                Employee::dept,
                Collectors.averagingInt(Employee::salary)
            ));
    }

    public static void main(String[] args) {
        List<Employee> employees = List.of(
            new Employee("A", "Eng", 5000),
            new Employee("B", "Eng", 7000),
            new Employee("C", "Sales", 4000)
        );
        System.out.println(avgSalaryByDept(employees));
    }
}
`,
  },
  {
    id: 'java-hard-3',
    language: 'java',
    difficulty: 'hard',
    title: '스레드 풀과 Future',
    topic: '동시성 · ExecutorService',
    description:
      '`ExecutorService`와 `Callable`을 사용해 1부터 n까지 각 숫자의 제곱을 병렬로 계산하고, 모든 결과의 합을 반환하는 메서드를 작성하세요.',
    starterCode: `import java.util.*;
import java.util.concurrent.*;

public class Main {
    static long sumOfSquaresParallel(int n) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(4);
        // TODO: Callable로 각 숫자의 제곱 계산 후 Future로 결과 수집, 합 반환
        return 0;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(sumOfSquaresParallel(10)); // 1^2+...+10^2 = 385
    }
}
`,
    hint: '각 숫자마다 `Callable<Long>`을 `executor.submit`하여 `List<Future<Long>>`을 만들고, 이후 `future.get()`으로 합산한 뒤 `executor.shutdown()`을 호출하세요.',
    solutionCode: `import java.util.*;
import java.util.concurrent.*;

public class Main {
    static long sumOfSquaresParallel(int n) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(4);
        List<Future<Long>> futures = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            final int num = i;
            futures.add(executor.submit(() -> (long) num * num));
        }
        long sum = 0;
        for (Future<Long> f : futures) {
            sum += f.get();
        }
        executor.shutdown();
        return sum;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(sumOfSquaresParallel(10));
    }
}
`,
  },

  // ── Expert ────────────────────────────────────────────
  {
    id: 'java-expert-1',
    language: 'java',
    difficulty: 'expert',
    title: '커스텀 어노테이션과 리플렉션',
    topic: '리플렉션 · 어노테이션',
    description:
      '`@Validate(min, max)` 어노테이션을 정의하고, 리플렉션을 사용해 객체의 필드 값이 지정된 범위 내에 있는지 검증하는 `validate(Object obj)` 메서드를 작성하세요.',
    starterCode: `import java.lang.annotation.*;
import java.lang.reflect.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface Validate {
    int min();
    int max();
}

class Product {
    @Validate(min = 0, max = 100)
    int quantity = 150;
}

public class Main {
    static boolean validate(Object obj) throws IllegalAccessException {
        // TODO: 리플렉션으로 @Validate 필드를 찾아 범위 검사
        return true;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(validate(new Product()));
    }
}
`,
    hint: '`obj.getClass().getDeclaredFields()`로 필드를 순회하고, `field.isAnnotationPresent(Validate.class)`로 확인한 뒤 `field.setAccessible(true)`로 값을 읽으세요.',
    solutionCode: `import java.lang.annotation.*;
import java.lang.reflect.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface Validate {
    int min();
    int max();
}

class Product {
    @Validate(min = 0, max = 100)
    int quantity = 150;
}

public class Main {
    static boolean validate(Object obj) throws IllegalAccessException {
        for (Field field : obj.getClass().getDeclaredFields()) {
            if (field.isAnnotationPresent(Validate.class)) {
                Validate v = field.getAnnotation(Validate.class);
                field.setAccessible(true);
                int value = field.getInt(obj);
                if (value < v.min() || value > v.max()) return false;
            }
        }
        return true;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(validate(new Product()));
    }
}
`,
  },
  {
    id: 'java-expert-2',
    language: 'java',
    difficulty: 'expert',
    title: '락-프리 큐를 위한 CAS 카운터',
    topic: '동시성 · AtomicReference',
    description:
      '`AtomicInteger`가 아닌 `AtomicReference<Integer>`와 CAS(compare-and-set) 루프를 직접 사용해 스레드 안전한 카운터 `increment()`를 구현하세요. (락을 사용하지 마세요.)',
    starterCode: `import java.util.concurrent.atomic.*;
import java.util.*;

public class Main {
    static AtomicReference<Integer> counter = new AtomicReference<>(0);

    static void increment() {
        // TODO: compareAndSet 루프로 구현 (synchronized/Lock 사용 금지)
    }

    public static void main(String[] args) throws InterruptedException {
        List<Thread> threads = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            Thread t = new Thread(() -> {
                for (int j = 0; j < 10000; j++) increment();
            });
            threads.add(t);
            t.start();
        }
        for (Thread t : threads) t.join();
        System.out.println(counter.get());
    }
}
`,
    hint: '`while (true) { int old = counter.get(); if (counter.compareAndSet(old, old + 1)) break; }` 패턴을 사용하세요.',
    solutionCode: `import java.util.concurrent.atomic.*;
import java.util.*;

public class Main {
    static AtomicReference<Integer> counter = new AtomicReference<>(0);

    static void increment() {
        while (true) {
            int oldVal = counter.get();
            int newVal = oldVal + 1;
            if (counter.compareAndSet(oldVal, newVal)) break;
        }
    }

    public static void main(String[] args) throws InterruptedException {
        List<Thread> threads = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            Thread t = new Thread(() -> {
                for (int j = 0; j < 10000; j++) increment();
            });
            threads.add(t);
            t.start();
        }
        for (Thread t : threads) t.join();
        System.out.println(counter.get());
    }
}
`,
  },
  {
    id: 'java-expert-3',
    language: 'java',
    difficulty: 'expert',
    title: '동적 프록시로 메서드 호출 로깅',
    topic: 'java.lang.reflect.Proxy',
    description:
      '`java.lang.reflect.Proxy`와 `InvocationHandler`를 사용해 인터페이스의 모든 메서드 호출을 콘솔에 로깅하는 프록시를 생성하는 `createLoggingProxy` 메서드를 작성하세요.',
    starterCode: `import java.lang.reflect.*;

interface Greeter {
    String greet(String name);
}

public class Main {
    @SuppressWarnings("unchecked")
    static <T> T createLoggingProxy(T target, Class<T> iface) {
        // TODO: Proxy.newProxyInstance로 InvocationHandler를 구현하여 반환
        return null;
    }

    public static void main(String[] args) {
        Greeter real = name -> "Hello, " + name + "!";
        Greeter proxy = createLoggingProxy(real, Greeter.class);
        System.out.println(proxy.greet("World"));
    }
}
`,
    hint: '`Proxy.newProxyInstance(iface.getClassLoader(), new Class<?>[]{iface}, (proxyObj, method, args1) -> { ... method.invoke(target, args1) ... })` 형태로 구현하세요.',
    solutionCode: `import java.lang.reflect.*;

interface Greeter {
    String greet(String name);
}

public class Main {
    @SuppressWarnings("unchecked")
    static <T> T createLoggingProxy(T target, Class<T> iface) {
        return (T) Proxy.newProxyInstance(
            iface.getClassLoader(),
            new Class<?>[]{iface},
            (proxyObj, method, args) -> {
                System.out.println("Calling: " + method.getName());
                Object result = method.invoke(target, args);
                System.out.println("Returned: " + result);
                return result;
            }
        );
    }

    public static void main(String[] args) {
        Greeter real = name -> "Hello, " + name + "!";
        Greeter proxy = createLoggingProxy(real, Greeter.class);
        System.out.println(proxy.greet("World"));
    }
}
`,
  },
]
