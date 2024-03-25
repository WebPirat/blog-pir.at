<template>
  <div class="text-center w-full flex justify-center items-center">
    <ul class="flex flex-wrap mx-auto">
      <li v-for="(icon, index) in iconMenu" :key="index" @click="handleIconClick(icon.id)" class="p-2 cursor-pointer">
        <a :class="['flex items-center font-bold py-2 px-4 rounded', icon.id === selectedIconId ? 'bg-orange text-white' : 'bg-lightgray hover:bg-orange text-white']">
          <font-awesome-icon :icon="icon.iconClass" class="text-2xl mr-2" :title="icon.description" />
          <span>{{ icon.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'IconsMenu',
  props: {
    iconSet: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      iconMenu: [],
      selectedIconId:''
    };
  },
  async mounted() {
    await this.fetchSupabaseData();
  },
  methods: {
    async fetchSupabaseData() {
      const supabase = useSupabaseClient();
      const {data: blog_icons, error} = await supabase.from('blog_icons').select('*');

      // Merge Supabase data with iconSet prop
      this.iconMenu = this.iconSet.reduce((acc, iconClass) => {
        const foundIcon = blog_icons.find(data => data.icon.toLowerCase() === iconClass.toLowerCase());
        if (foundIcon) {
          acc.push({
            id: foundIcon.id,
            iconClass: foundIcon.icon,
            name: foundIcon.name,
            description: foundIcon.description,
            link: foundIcon.link
          });
        }
        return acc;
      }, []);

      // Add default icon if not found in database
      if (!this.iconMenu.some(icon => icon.iconClass === 'fas fa-bug')) {
        this.iconMenu.push({
          id: null,
          iconClass: 'fas fa-bug',
          name: 'Bug',
          description: 'Default Icon Description',
          link: '#'
        });
      }
    },
    handleIconClick(iconId) {
      const clickedIconIndex = this.iconMenu.findIndex(icon => icon.id === 'x');
      if (clickedIconIndex === -1) {
        const clickedIcon = this.iconMenu[clickedIconIndex];
        this.iconMenu.unshift({
          id: 'x',
          iconClass: 'fa-solid fa-x',
          name: `löschen`,
          description: 'Auswahl aufheben',
        });
      }
      if(iconId === 'x') {
        this.iconMenu.shift();
        iconId = false;
      }
      this.selectedIconId = iconId;
      this.$emit('iconClick', iconId);
    }
  }
};
</script>


<style>
/* Add any necessary styling */
</style>


