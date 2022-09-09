import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  | 'gnome'
  | 'kde'
 
// Add sites to this list
// prettier-ignore
const Users: User[] = [
    {
        title: 'Crystal Clear',
        description: 'Clear theme with Crystal\'s colors',
        preview: require('./previews/crystal-clear.png'),
        website: 'https://github.com/',
        source: 'https://github.com/GradienceTeam/Community/raw/main/curated/crystal-clear.json',
        tags: [ 'gnome'],
      }

];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'Our favorite Docusaurus sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  gnome: {
    label: translate({message: 'GNOME'}),
    description: translate({
      message: 'GNOME is a desktop environment for Unix-like operating systems.',
      id: 'showcase.tag.gnome.description',
    }),
    color: '#39ca30',
  },

  kde: {
    label: translate({message: 'KDE'}),
    description: translate({
      message: 'KDE is a desktop environment for Unix-like operating systems.',
      id: 'showcase.tag.kde.description',
    }),
    color: '#dfd545',
  },
};

export const TagList = Object.keys(Tags) as TagType[];

function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}
export const sortedUsers = sortUsers();