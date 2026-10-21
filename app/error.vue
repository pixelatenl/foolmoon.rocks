<template>
  <div>
    <div class="cinematic"></div>
    <page-header :navigation="navigation" />
    <div class="container">
      <div class="columns">
        <div class="column">
          <section class="block">
            <header class="block__header">
              <h1 class="block__title">{{ pageTitle }}</h1>
            </header>
            <div class="block__content content">
              <p>{{ message }}</p>
              <p><a href="/">Back to the Fool Moon home page</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const error = useError();

const navigation = [
  { title: "Home", href: "/" },
  { title: "Live", href: "/live" },
  { title: "Media", href: "/media" },
  { title: "Bio", href: "/bio" },
  { title: "Contact", href: "/contact" },
];

const isNotFound = computed(() => error.value?.statusCode === 404);
const pageTitle = computed(() =>
  isNotFound.value ? "Page not found" : "Something went wrong",
);
const message = computed(() =>
  isNotFound.value
    ? "The page you are looking for does not exist (anymore)."
    : "An unexpected error occurred. Please try again later.",
);

useSeoMeta({
  title: computed(() => `${pageTitle.value} | Fool Moon`),
});
</script>
