export interface ArticleModel {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const articles: ArticleModel[] = [
  {
    id: "clean-architecture-flutter",
    title: "Architecting Enterprise Flutter Apps with Clean Architecture & BLoC",
    slug: "clean-architecture-flutter",
    category: "Architecture",
    date: "Jan 2026",
    readTime: "6 min read",
    excerpt:
      "A deep dive into decoupling Domain, Data, and Presentation layers in Flutter apps to ensure testability, scalability, and seamless refactoring.",
    tags: ["Flutter", "Clean Architecture", "BLoC", "Dart"],
    content: `
Clean Architecture enforces strict boundary separation between business logic and UI frameworks.

### The 3 Core Layers:
1. **Domain Layer**: Contains Entities, Use Cases, and Repository Interface Contracts. 100% pure Dart code with zero Flutter dependencies.
2. **Data Layer**: Implements Repository Contracts, communicates with Data Sources (Dio REST API, Hive Local Storage), and maps Data Models to Domain Entities.
3. **Presentation Layer**: BLoC/Cubit state management listening to Use Cases and emitting reactive immutable states to Flutter UI Widgets.

\`\`\`dart
// Domain Layer Use Case Example
class GetUserData {
  final UserRepository repository;
  GetUserData(this.repository);

  Future<Either<Failure, UserEntity>> call(String userId) async {
    return await repository.getUserProfile(userId);
  }
}
\`\`\`
`,
  },
  {
    id: "repository-pattern-caching",
    title: "Mastering Repository Pattern with Dio & Hive Local Caching",
    slug: "repository-pattern-caching",
    category: "Data Layer",
    date: "Dec 2025",
    readTime: "5 min read",
    excerpt:
      "How to implement an offline-first data synchronization strategy using Hive local database, Shared Preferences, and Dio network interceptors.",
    tags: ["Hive", "Dio", "Offline First", "Flutter"],
    content: `
Building resilient mobile applications requires an offline-first strategy where data is cached locally before network calls.

### Offline Sync Strategy:
- **Fetch Strategy**: Read from local Hive box first for immediate rendering.
- **Background Sync**: Trigger Dio HTTP GET request to check for server updates.
- **Cache Update**: Write fresh server payload into Hive and notify UI listeners.
`,
  },
  {
    id: "solid-principles-dart",
    title: "Enforcing SOLID Principles in Cross-Platform Mobile Engineering",
    slug: "solid-principles-dart",
    category: "Software Engineering",
    date: "Nov 2025",
    readTime: "7 min read",
    excerpt:
      "Practical applications of Single Responsibility, Dependency Inversion, and Interface Segregation to eliminate tight coupling in Dart & .NET.",
    tags: ["SOLID", "Dart", "Clean Code", ".NET"],
    content: `
Applying SOLID principles in Flutter reduces bug regression and speeds up team onboarding.

- **S**: Single Responsibility Principle — One class, one reason to change.
- **D**: Dependency Inversion Principle — Depend on abstractions (Interfaces), not concrete implementations.
`,
  },
  {
    id: "flutter-performance-profiling",
    title: "Optimizing Flutter App Performance & Eliminating Frame Drops",
    slug: "flutter-performance-profiling",
    category: "Performance",
    date: "Oct 2025",
    readTime: "4 min read",
    excerpt:
      "Techniques for reducing widget rebuilds, optimizing DevTools memory profilers, using const constructors, and managing image memory footprints.",
    tags: ["Performance", "Flutter DevTools", "Optimization"],
    content: `
Achieving a smooth 60fps / 120fps UI requires avoiding expensive build method calls and memory leaks.

- **const Constructors**: Prevent unnecessary widget reinstantiation.
- **RepaintBoundary**: Isolate complex animations to separate canvas repaint layers.
`,
  },
];
