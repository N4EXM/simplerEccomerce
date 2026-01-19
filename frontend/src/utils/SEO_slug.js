/**
 * Generate SEO-friendly slug from string
 * @param {string} input - Input string
 * @param {string} separator - Separator character (default: '-')
 * @param {boolean} removeStopWords - Remove common stop words
 * @returns {string} SEO-friendly slug
 */
export const generateSlug = (input, separator = '-', removeStopWords = false) => {
    if (!input || typeof input !== 'string') return '';
    
    // Common stop words to remove (optional)
    const stopWords = new Set([
        'a', 'an', 'the', 'and', 'or', 'but', 'for', 'nor', 'on', 
        'in', 'at', 'to', 'by', 'of', 'with', 'is', 'are', 'was',
        'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having',
        'do', 'does', 'did', 'doing', 'this', 'that', 'these', 'those'
    ]);
    
    // Convert to lowercase
    let slug = input.toLowerCase().trim();
    
    // Remove special characters and symbols
    slug = slug
        .replace(/[®™©•°½⅓¼⅔¾⅛⅜⅝⅞]/g, '') // Remove common symbols
        .replace(/[^\w\s-]/g, '') // Remove non-word chars except spaces and hyphens
        .replace(/[\s_-]+/g, ' ') // Replace multiple spaces/hyphens with single space
        .trim();
    
    // Remove stop words if enabled
    if (removeStopWords) {
        const words = slug.split(' ');
        const filteredWords = words.filter(word => !stopWords.has(word));
        slug = filteredWords.join(' ');
    }
    
    // Replace spaces with separator
    slug = slug.replace(/\s+/g, separator);
    
    // Remove duplicate separators
    slug = slug.replace(new RegExp(`${separator}+`, 'g'), separator);
    
    // Trim separators from beginning and end
    slug = slug.replace(new RegExp(`^${separator}+|${separator}+$`, 'g'), '');
    
    // Limit length (max 100 characters)
    if (slug.length > 100) {
        slug = slug.substring(0, 100);
        // Don't cut in the middle of a separator
        const lastSeparator = slug.lastIndexOf(separator);
        if (lastSeparator > 80) { // Only trim if we're not losing too much
            slug = slug.substring(0, lastSeparator);
        }
    }
    
    return slug;
};