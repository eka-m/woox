<template>
  <div class="nav-bar">
    <div>
      <PartialsIcon name="estate" hover="#0080ff" pointer />
    </div>
    <div>
      <PartialsIcon name="user" hover="#0080ff" pointer />
    </div>
    <div>
      <PartialsSupBadge content="1" type="success" :show="true">
        <PartialsIcon name="fire" hover="#0080ff" pointer />
      </PartialsSupBadge>
    </div>
    <div>
      <PartialsSupBadge content="1" type="danger" :show="false">
        <PartialsIcon name="comment" hover="#0080ff" pointer />
      </PartialsSupBadge>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-bar {
    @apply bg-white px-7 sm:px-10 py-4 flex justify-between items-center fixed bottom-0 left-0 right-0 w-full;
    box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

</style>
