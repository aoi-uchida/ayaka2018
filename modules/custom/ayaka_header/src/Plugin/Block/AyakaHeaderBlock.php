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
 *   id = "ayaka_header_block",
 *   admin_label = @Translation("Ayaka Header Block"),
 *   category = @Translation("Custom block")
 * )
 */
class AyakaHeaderBlock extends BlockBase {
  
  public function build() {
    return array(
      '#theme' => 'ayaka_header',
    );
  }
} 
