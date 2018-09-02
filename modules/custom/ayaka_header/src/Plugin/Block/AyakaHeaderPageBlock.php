<?php
/**
 * @file
 * Contains \Drupal\ayaka_header\Plugin\Block\XaiBlock.
 */

namespace Drupal\ayaka_header\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ayaka_header' block.
 *
 * @Block(
 *   id = "ayaka_header_page_block",
 *   admin_label = @Translation("Ayaka Header Page Block"),
 *   category = @Translation("Custom block")
 * )
 */
class AyakaHeaderPageBlock extends BlockBase {
  
  public function build() {
    return array(
      '#theme' => 'ayaka_header_page',
    );
  }
} 
