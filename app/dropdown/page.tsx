'use client'
import React from 'react'
import Dropdown_1 from './_components/Dropdown_1'
import Dropdown_36 from './_components/Dropdown_36'
import Dropdown_37 from './_components/Dropdown_37'
import Dropdown_38 from './_components/Dropdown_38'
import Dropdown_39 from './_components/Dropdown_39'
import Dropdown_40 from './_components/Dropdown_40'
import Dropdown_41 from './_components/Dropdown_41'
import Dropdown_42 from './_components/Dropdown_42'
import Dropdown_43 from './_components/Dropdown_43'
import Dropdown_44 from './_components/Dropdown_44'
import Dropdown_45 from './_components/Dropdown_45'
import Dropdown_46 from './_components/Dropdown_46'
import Dropdown_47 from './_components/Dropdown_47'
import Dropdown_48 from './_components/Dropdown_48'
import Dropdown_49 from './_components/Dropdown_49'
import Dropdown_50 from './_components/Dropdown_50'
import Dropdown_51 from './_components/Dropdown_51'
import Dropdown_52 from './_components/Dropdown_52'
import Dropdown_53 from './_components/Dropdown_53'
import Dropdown_54 from './_components/Dropdown_54'
import Dropdown_55 from './_components/Dropdown_55'
import Dropdown_56 from './_components/Dropdown_56'
import Dropdown_57 from './_components/Dropdown_57'
import Dropdown_58 from './_components/Dropdown_58'
import Dropdown_59 from './_components/Dropdown_59'
import Dropdown_60 from './_components/Dropdown_60'
import Dropdown_61 from './_components/Dropdown_61'
import Dropdown_62 from './_components/Dropdown_62'
import Dropdown_63 from './_components/Dropdown_63'
import Dropdown_64 from './_components/Dropdown_64'
import Dropdown_65 from './_components/Dropdown_65'
import Dropdown_66 from './_components/Dropdown_66'
import Dropdown_67 from './_components/Dropdown_67'
import Dropdown_68 from './_components/Dropdown_68'
import Dropdown_69 from './_components/Dropdown_69'
import Dropdown_70 from './_components/Dropdown_70'

const DropdownPage = () => {
  // Example options for the dropdowns
  const menuOptions = [
    { id: 1, label: 'Dashboard', value: 'dashboard', icon: '📊' },
    { id: 2, label: 'Projects', value: 'projects', icon: '📁' },
    { id: 3, label: 'Team', value: 'team', icon: '👥' },
    { id: 4, label: 'Calendar', value: 'calendar', icon: '📅' },
    { id: 5, label: 'Reports', value: 'reports', icon: '📈' }
  ]

  const profileOptions = [
    { id: 1, label: 'Profile', value: 'profile' },
    { id: 2, label: 'Settings', value: 'settings' },
    { id: 3, label: 'Messages', value: 'messages', disabled: true },
    { id: 4, label: 'Analytics', value: 'analytics' },
    { id: 5, label: 'Logout', value: 'logout' }
  ]

  const categoryOptions = [
    { id: 1, label: 'Design', value: 'design' },
    { id: 2, label: 'Development', value: 'development' },
    { id: 3, label: 'Marketing', value: 'marketing' },
    { id: 4, label: 'Business', value: 'business' },
    { id: 5, label: 'Support', value: 'support' }
  ]

  const themeOptions = [
    { id: 1, label: 'Light', value: 'light' },
    { id: 2, label: 'Dark', value: 'dark' },
    { id: 3, label: 'System', value: 'system' }
  ]

  const planOptions = [
    { id: 1, label: 'Basic', value: 'basic', price: '$9/mo' },
    { id: 2, label: 'Pro', value: 'pro', price: '$19/mo' },
    { id: 3, label: 'Enterprise', value: 'enterprise', price: '$49/mo' }
  ]

  const locationOptions = [
    { id: 1, label: 'New York', value: 'ny', country: 'USA' },
    { id: 2, label: 'London', value: 'ldn', country: 'UK' },
    { id: 3, label: 'Paris', value: 'par', country: 'France' },
    { id: 4, label: 'Tokyo', value: 'tky', country: 'Japan' }
  ]

  const statusOptions = [
    { id: 1, label: 'Active', value: 'active', badge: '12' },
    { id: 2, label: 'In Progress', value: 'progress', badge: '5' },
    { id: 3, label: 'Completed', value: 'completed', badge: '28' },
    { id: 4, label: 'Archived', value: 'archived', badge: '9' }
  ]

  const colorOptions = [
    { id: 1, label: 'Purple', value: 'purple', color: 'purple' },
    { id: 2, label: 'Teal', value: 'teal', color: 'teal' },
    { id: 3, label: 'Orange', value: 'orange', color: 'orange' },
    { id: 4, label: 'Pink', value: 'pink', color: 'pink' }
  ]

  const difficultyOptions = [
    { id: 1, label: 'Beginner', value: 'beginner', description: 'Perfect for getting started' },
    { id: 2, label: 'Intermediate', value: 'intermediate', description: 'For those with some experience' },
    { id: 3, label: 'Advanced', value: 'advanced', description: 'For experienced users' },
    { id: 4, label: 'Expert', value: 'expert', description: 'Master level difficulty' }
  ]

  const actionOptions = [
    { id: 1, label: 'Copy', value: 'copy' },
    { id: 2, label: 'Share', value: 'share' },
    { id: 3, label: 'Edit', value: 'edit' },
    { id: 4, label: 'Delete', value: 'delete', disabled: true }
  ]

  const fileOptions = [
    { id: 1, label: 'Save', value: 'save', shortcut: '⌘S' },
    { id: 2, label: 'Save As', value: 'save-as', shortcut: '⌘⇧S' },
    { id: 3, label: 'Export', value: 'export', shortcut: '⌘E' },
    { id: 4, label: 'Print', value: 'print', shortcut: '⌘P', disabled: true }
  ]

  // Example handlers
  const handleSelect = (value: string) => {
    console.log('Selected value:', value)
  }

  const handleChange = (value: string) => {
    console.log('Changed value:', value)
  }

  // Add new handlers for multi-select
  const handleMultiSelect = (values: string[]) => {
    console.log('Selected values:', values);
  };

  const handleMultiChange = (values: string[]) => {
    console.log('Changed values:', values);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Dropdown Components
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Modern Menu Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Modern Menu Dropdown
            </h2>
            <Dropdown_1
              options={menuOptions}
              placeholder="Menu"
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Gradient Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Gradient Dropdown
            </h2>
            <Dropdown_39
              options={planOptions}
              placeholder="Select Plan"
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Floating Card Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Floating Card Dropdown
            </h2>
            <Dropdown_40
              options={locationOptions}
              placeholder="Select Location"
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Status Filter Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Status Filter Dropdown
            </h2>
            <Dropdown_41
              options={statusOptions}
              placeholder="Filter Status"
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Priority Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Priority Dropdown
            </h2>
            <Dropdown_42
              options={colorOptions}
              placeholder="Select Color"
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Difficulty Level Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Difficulty Level Dropdown
            </h2>
            <Dropdown_43
              options={difficultyOptions}
              placeholder="Select Difficulty"
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Action Menu Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Action Menu Dropdown
            </h2>
            <Dropdown_44
              options={actionOptions}
              placeholder="Actions"
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Keyboard Shortcuts Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Keyboard Shortcuts Dropdown
            </h2>
            <Dropdown_45
              options={fileOptions}
              placeholder="File"
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Emoji Selection Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Emoji Selection Dropdown
            </h2>
            <Dropdown_46 
              options={[
                { id: 1, label: '👍 Like', value: 'like', emoji: '👍' },
                { id: 2, label: '❤️ Love', value: 'love', emoji: '❤️' },
                { id: 3, label: '😄 Smile', value: 'smile', emoji: '😄' },
                { id: 4, label: '🎉 Celebrate', value: 'celebrate', emoji: '🎉' }
              ]}
            />
          </div>

          {/* Task Counter Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Task Counter Dropdown
            </h2>
            <Dropdown_47 
              options={[
                { id: 1, label: 'All Tasks', value: 'all', count: 36 },
                { id: 2, label: 'Today', value: 'today', count: 8 },
                { id: 3, label: 'Upcoming', value: 'upcoming', count: 12 },
                { id: 4, label: 'Archived', value: 'archived', count: 24, disabled: true }
              ]}
            />
          </div>

          {/* Priority Bubble Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Priority Bubble Dropdown
            </h2>
            <Dropdown_48 
              options={[
                { id: 1, label: 'Low Priority', value: 'low', color: '#22C55E' },
                { id: 2, label: 'Medium Priority', value: 'medium', color: '#EAB308' },
                { id: 3, label: 'High Priority', value: 'high', color: '#EF4444' },
                { id: 4, label: 'Critical', value: 'critical', color: '#7C3AED' }
              ]}
            />
          </div>

          {/* Theme Selection Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Theme Selection Dropdown
            </h2>
            <Dropdown_49
              options={themeOptions}
              placeholder="Select Theme"
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Split Button Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Split Button Dropdown
            </h2>
            <Dropdown_50
              options={fileOptions}
              placeholder="File"
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Categorized Search Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Categorized Search Dropdown
            </h2>
            <Dropdown_51
              options={[
                { id: 1, label: 'JavaScript', value: 'js', category: 'Frontend' },
                { id: 2, label: 'TypeScript', value: 'ts', category: 'Frontend' },
                { id: 3, label: 'React', value: 'react', category: 'Frontend' },
                { id: 4, label: 'Vue', value: 'vue', category: 'Frontend' },
                { id: 5, label: 'Angular', value: 'angular', category: 'Frontend' },
                { id: 6, label: 'Node.js', value: 'node', category: 'Backend' },
                { id: 7, label: 'Python', value: 'python', category: 'Backend' },
                { id: 8, label: 'Java', value: 'java', category: 'Backend' },
                { id: 9, label: 'Go', value: 'go', category: 'Backend' },
                { id: 10, label: 'Rust', value: 'rust', category: 'Backend' }
              ]}
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Country Search Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Country Search Dropdown
            </h2>
            <Dropdown_52
              options={[
                { id: 1, label: 'United States', value: 'us', icon: '🇺🇸' },
                { id: 2, label: 'United Kingdom', value: 'uk', icon: '🇬🇧' },
                { id: 3, label: 'Canada', value: 'ca', icon: '🇨🇦' },
                { id: 4, label: 'Australia', value: 'au', icon: '🇦🇺' },
                { id: 5, label: 'Germany', value: 'de', icon: '🇩🇪' },
                { id: 6, label: 'France', value: 'fr', icon: '🇫🇷' },
                { id: 7, label: 'Japan', value: 'jp', icon: '🇯🇵' },
                { id: 8, label: 'Brazil', value: 'br', icon: '🇧🇷' },
                { id: 9, label: 'India', value: 'in', icon: '🇮🇳' },
                { id: 10, label: 'China', value: 'cn', icon: '🇨🇳' }
              ]}
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Job Role Search Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Job Role Search Dropdown
            </h2>
            <Dropdown_53
              options={[
                { id: 1, label: 'React Developer', value: 'react', tags: ['Frontend', 'JavaScript', 'Web'] },
                { id: 2, label: 'UI/UX Designer', value: 'design', tags: ['Design', 'Creative', 'Web'] },
                { id: 3, label: 'Node.js Developer', value: 'node', tags: ['Backend', 'JavaScript', 'Server'] },
                { id: 4, label: 'Python Engineer', value: 'python', tags: ['Backend', 'Data', 'AI'] },
                { id: 5, label: 'DevOps Engineer', value: 'devops', tags: ['Infrastructure', 'Cloud', 'CI/CD'] },
                { id: 6, label: 'Product Manager', value: 'product', tags: ['Management', 'Strategy', 'Leadership'] },
                { id: 7, label: 'Data Scientist', value: 'data', tags: ['Analytics', 'AI', 'Statistics'] },
                { id: 8, label: 'Mobile Developer', value: 'mobile', tags: ['iOS', 'Android', 'Apps'] }
              ]}
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Multi-Select Color Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Multi-Select Color Dropdown
            </h2>
            <Dropdown_54
              options={[
                { id: 1, label: 'Red', value: 'red', color: '#EF4444' },
                { id: 2, label: 'Blue', value: 'blue', color: '#3B82F6' },
                { id: 3, label: 'Green', value: 'green', color: '#10B981' },
                { id: 4, label: 'Yellow', value: 'yellow', color: '#F59E0B' },
                { id: 5, label: 'Purple', value: 'purple', color: '#8B5CF6' },
                { id: 6, label: 'Pink', value: 'pink', color: '#EC4899' },
                { id: 7, label: 'Orange', value: 'orange', color: '#F97316' },
                { id: 8, label: 'Teal', value: 'teal', color: '#14B8A6' }
              ]}
              onSelect={handleMultiSelect}
              onChange={handleMultiChange}
            />
          </div>

          {/* Fuzzy Search Editor Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Fuzzy Search Editor Dropdown
            </h2>
            <Dropdown_55
              options={[
                { 
                  id: 1, 
                  label: 'Visual Studio Code', 
                  value: 'vscode',
                  description: 'Popular code editor by Microsoft'
                },
                { 
                  id: 2, 
                  label: 'Sublime Text', 
                  value: 'sublime',
                  description: 'Fast and lightweight editor'
                },
                { 
                  id: 3, 
                  label: 'Atom', 
                  value: 'atom',
                  description: 'Hackable text editor'
                },
                { 
                  id: 4, 
                  label: 'Vim', 
                  value: 'vim',
                  description: 'Modal text editor'
                }
              ]}
              onSelect={handleSelect}
              onChange={handleChange}
            />
          </div>

          {/* Dropdown 56 - 3D Flip with Nested Categories */}
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              3D Flip with Categories
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Nested categories with 3D flip animation
            </p>
            <Dropdown_56 />
          </div>

          {/* Dropdown 57 - Theme Selection with Icons */}
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Theme Selection
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Beautiful theme options with descriptive cards
            </p>
            <Dropdown_57 />
          </div>

          {/* Dropdown 58 - Minimalist Edit Menu */}
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Menu
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Clean interface with keyboard shortcuts
            </p>
            <Dropdown_58 />
          </div>

          {/* Dropdown 59 - Skill Level Selection */}
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Skill Level
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Gradient indicators with descriptions
            </p>
            <Dropdown_59 />
          </div>

          {/* Dropdown 60 - Split Button Save Menu */}
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Save Options
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Split button design with shortcuts
            </p>
            <Dropdown_60 />
          </div>

          {/* Multi-Column Category Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Multi-Column Categories
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Organized tools with icons and categories
            </p>
            <Dropdown_61 />
          </div>

          {/* Timeline Milestone Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Timeline Milestones
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Project timeline with status indicators
            </p>
            <Dropdown_62 />
          </div>

          {/* Property Listing Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Property Listings
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Rich property cards with ratings
            </p>
            <Dropdown_63 />
          </div>

          {/* Command Palette Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Command Palette
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Searchable commands with tabs
            </p>
            <Dropdown_64 />
          </div>

          {/* Project Progress Dropdown */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Project Progress
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Task tracking with progress indicators
            </p>
            <Dropdown_65 />
          </div>
        </div>

        {/* New Dropdowns */}
        <section className="space-y-8">
          {/* Dropdown 66 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              File Preview Dropdown
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A dropdown with rich file preview cards, showing thumbnails and metadata.
            </p>
            <Dropdown_66 />
          </div>

          {/* Dropdown 67 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Notification Style Dropdown
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A dropdown displaying notifications with user avatars and interaction states.
            </p>
            <Dropdown_67 />
          </div>

          {/* Dropdown 68 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Calendar Events Dropdown
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A dropdown showing calendar events with time slots and attendee information.
            </p>
            <Dropdown_68 />
          </div>

          {/* Dropdown 69 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Multi-Step Form Dropdown
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A dropdown with a multi-step form process and progress tracking.
            </p>
            <Dropdown_69 />
          </div>

          {/* Dropdown 70 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Nested Filters Dropdown
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A dropdown with nested filter options including checkboxes, radio buttons, and range sliders.
            </p>
            <Dropdown_70 />
          </div>
        </section>
      </div>
    </div>
  )
}

export default DropdownPage