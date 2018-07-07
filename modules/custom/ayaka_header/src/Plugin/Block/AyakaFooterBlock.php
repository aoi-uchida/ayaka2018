<?php
/**
 * @file
 * Contains \Drupal\ayaka_header\Plugin\Block\XaiBlock.
 */

namespace Drupal\ayaka_header\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ayaka_footer' block.
 *
 * @Block(
 *   id = "ayaka_footer_block",
 *   admin_label = @Translation("Ayaka Footer Block"),
 *   category = @Translation("Custom block")
 * )
 */
class AyakaFooterBlock extends BlockBase {
  
  public function build() {
    return array(
      '#theme' => 'ayaka_footer',
    );
  }
} 
