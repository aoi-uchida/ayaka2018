<?php
/**
 * @file
 * Contains \Drupal\ayaka_header\Plugin\Block\XaiBlock.
 */

namespace Drupal\ayaka_header\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ayaka_about_me' block.
 *
 * @Block(
 *   id = "ayaka_about_me_block",
 *   admin_label = @Translation("Ayaka About Me Block"),
 *   category = @Translation("Custom block")
 * )
 */
class AyakaAboutMeBlock extends BlockBase {
  
  public function build() {
    return array(
      '#theme' => 'ayaka_about_me',
    );
  }
} 
